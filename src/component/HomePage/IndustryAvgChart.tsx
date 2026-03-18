import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts";
import type { RectangleProps } from "recharts";

type ChartRow = {
  name: string;
  value: number;
  marker?: number;
  color: string;
};

type KPIHorizontalBarChartProps = {
  data: ChartRow[];
};

function MarkerBar(props: RectangleProps) {
  const { x = 0, y = 0, width = 0, height = 0 } = props;
  const markerWidth = 2;

  return (
    <rect
      x={x + width / 2 - markerWidth / 2}
      y={y}
      width={markerWidth}
      height={height}
      fill="#eab308"
      rx={1}
    />
  );
}

export function IndustryAvgChart({
  data,
}: KPIHorizontalBarChartProps) {
  const allValues = data.flatMap((d) =>
    d.marker !== undefined ? [d.value, d.marker] : [d.value]
  );

  const minValue = Math.min(...allValues, 0);
  const maxValue = Math.max(...allValues, 0);

  const markerData = data.map((d) => ({
    ...d,
    markerValue: d.marker ?? undefined,
  }));

  return (
    <div className="h-full w-full min-h-0 min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={markerData}
          layout="vertical"
          margin={{ top: 8, right: 0, left: 8, bottom: 8 }}
          barCategoryGap="28%"
          barGap="-100%"
        >
          <XAxis
            type="number"
            domain={[minValue, maxValue]}
            allowDataOverflow
            tick={false}
            tickLine={false}
            axisLine={false}
            padding={{ left: 0, right: 0 }}
          />

          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            width={180}
          />

          <ReferenceLine x={0} stroke="#666" strokeWidth={1} />

          <Bar dataKey="value" isAnimationActive={false}>
            {markerData.map((entry, index) => (
              <Cell key={`bar-${index}`} fill={entry.color} />
            ))}
          </Bar>

          <Bar
            dataKey="markerValue"
            barSize={2}
            shape={<MarkerBar />}
            isAnimationActive={false}
          >
            {markerData.map((entry, index) => (
              <Cell
                key={`marker-${index}`}
                fill={entry.marker !== undefined ? "#eab308" : "transparent"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}