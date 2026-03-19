import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
  LabelList
} from "recharts";

type ChartRow = {
    name: string;
    value: number;
    marker?: number;
    color: string;
};

const data: ChartRow[] = [
  {
    name: "Energy transition",
    value: 30,
    color: "#415b39",
  },
  {
    name: "Biodiversity",
    value: 20,
    color: "#415b39",
    // showPercent is optional here
  },
  {
    name: "Decarbonization",
    value: -5,
    color: "#630101",
  },
  {
    name: "Freshwater",
    value: -20,
    color: "#630101",
  },
];

export function BarChart2() {
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
          margin={{ top: 8, right: 40, left:0, bottom: 0 }}
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
            tick={{dx:-30}}
            axisLine={false}
            tickLine={false}
            width={180}
          />

          <ReferenceLine x={0} stroke="#666" strokeWidth={1} />

          <Bar dataKey="value" isAnimationActive={false}>
            {markerData.map((entry, index) => (
              <Cell key={`bar-${index}`} fill={entry.color} />
            ))}
            <LabelList
              dataKey="value"
              position="right"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}