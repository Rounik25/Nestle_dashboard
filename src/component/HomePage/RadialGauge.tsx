type GaugeSegment = {
  start: number;
  end: number;
  color: string;
};

type RadialGaugeProps = {
  value: number;
  title?: string;
  segments?: GaugeSegment[];
};

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    start.x,
    start.y,
    "A",
    r,
    r,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");
}

export function RadialGauge({
  value,
  segments = Array.from({ length: 10 }, (_, i) => {
    const start = i * 10;
    const end = start + 10;

    let color = "#22c55e";
    if (i < 3) color = "#ef4444";
    else if (i < 7) color = "#eab308";

    return { start, end, color };
  }),
}: RadialGaugeProps) {
  const clampedValue = Math.max(0, Math.min(100, value));

  // Internal SVG coordinate system only
  const cx = 100;
  const cy = 135;
  const radius = 72;

  const minAngle = -120;
  const maxAngle = 120;

  const valueToAngle = (v: number) =>
    minAngle + (v / 100) * (maxAngle - minAngle);

  const needleAngle = valueToAngle(clampedValue);

  const needleLength = 65;
  const needleBaseWidth = 4;
  const segmentGap = 1.5;

  const needleTip = polarToCartesian(cx, cy, needleLength, needleAngle);
  const needleLeft = polarToCartesian(cx, cy, needleBaseWidth, needleAngle - 90);
  const needleRight = polarToCartesian(cx, cy, needleBaseWidth, needleAngle + 90);

  return (
    <div className="h-full w-full">
      <svg
        viewBox="0 40 200 100"
        className="block h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {segments.map((seg, i) => (
          <path
            key={i}
            d={describeArc(
              cx,
              cy,
              radius,
              valueToAngle(seg.start) + segmentGap,
              valueToAngle(seg.end) - segmentGap
            )}
            fill="none"
            stroke={seg.color}
            strokeWidth={10}
            strokeLinecap="butt"
          />
        ))}

        <polygon
          points={`${needleLeft.x},${needleLeft.y} ${needleRight.x},${needleRight.y} ${needleTip.x},${needleTip.y}`}
          fill="#8a8a8a"
        />

        <circle cx={cx} cy={cy} r={5} fill="#6f6f6f" />
      </svg>
    </div>
  );
}