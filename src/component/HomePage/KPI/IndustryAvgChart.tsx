import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
  ReferenceDot,
  LabelList,
} from "recharts";

type ChartRow = {
  name: string;
  value: number;
  median?: number;
  color: string;
};

const data: ChartRow[] = [
  {
    name: "Commitments off track",
    value: 30,
    median: 18,
    color: "#630101",
  },
  {
    name: "Stakeholder sentiment",
    value: -12,
    median: -5,
    color: "#630101",
  },
  {
    name: "Sustainability share of voice",
    value: 20,
    median: 12,
    color: "#cfcfcf",
  },
];

type MedianTickProps = {
  cx?: number;
  cy?: number;
};

function MedianTick({ cx, cy }: MedianTickProps) {
  if (cx == null || cy == null) return null;

  return (
    <rect
      x={cx - 2}
      y={cy - 12}
      width={4}
      height={24}
      fill="#facc15"
      rx={1}
    />
  );
}

type ValueLabelProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  value?: number | string;
};

function ValueLabel({ x, y, width, height, value }: ValueLabelProps) {
  if (
    x == null ||
    y == null ||
    width == null ||
    height == null ||
    value == null
  ) {
    return null;
  }

  const numericValue = typeof value === "number" ? value : Number(value);
  const isNegative = numericValue < 0;

  // anchor at bar end, just shift slightly inward
  const labelX = isNegative
    ? x + width - 6   // move slightly left from bar end
    : x + width + 6;  // move slightly right for positive

  const anchor = isNegative ? "end" : "start";

  return (
    <text
      x={labelX}
      y={y + height / 2}
      textAnchor={anchor}
      dominantBaseline="middle"
      fill="#000"
      fontSize={12}
    >
      {`${numericValue}%`}
    </text>
  );
}

export function IndustryAvgChart() {
  const allValues = data.flatMap((d) =>
    d.median !== undefined ? [d.value, d.median] : [d.value]
  );

  const minValue = Math.min(...allValues, 0);
  const maxValue = Math.max(...allValues, 0);

  return (
    <div className="h-full w-full min-h-0 min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 8, right: 40, left: 40, bottom: 0 }}
          barCategoryGap="15%"
        >
          <XAxis
            type="number"
            domain={[minValue, maxValue]}
            allowDataOverflow
            tick={false}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            type="category"
            dataKey="name"
            interval={0}
            tickMargin={12}
            axisLine={false}
            tickLine={false}
            width={250}
            tick={{dx: -25}}
          />

          <ReferenceLine x={0} stroke="#666" strokeWidth={1} />

          <Bar dataKey="value" isAnimationActive={false}>
            {data.map((entry, index) => (
              <Cell key={`bar-${index}`} fill={entry.color} />
            ))}
            <LabelList content={<ValueLabel />} />
          </Bar>

          {data.map(
            (entry, index) =>
              entry.median !== undefined && (
                <ReferenceDot
                  key={`median-${index}`}
                  x={entry.median}
                  y={entry.name}
                  shape={<MedianTick />}
                  ifOverflow="visible"
                />
              )
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}