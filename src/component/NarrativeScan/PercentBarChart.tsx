import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Freshwater", total: 23, low: 58, mid: 24, high: 18 },
  { name: "Energy Transition", total: 45, low: 78, mid: 8, high: 14 },
  { name: "Decarbonization", total: 30, low: 75, mid: 10, high: 15 },
  { name: "Biodiversity", total: 15, low: 52, mid: 23, high: 25 },
];

const lowColors = ["#264b17", "#214b7d", "#3a3a3a", "#5a4a4a"];
const midColors = ["#315f1f", "#38639a", "#555555", "#8a6d6d"];
const highColors = ["#6e9a63", "#5f88c9", "#6b6b6b", "#bf6d69"];

type DataRow = (typeof data)[number];
type SegmentKey = "low" | "mid" | "high";

type TooltipEntry = {
  name: string;
  value: number | string;
  dataKey?: string | number;
  payload?: DataRow;
};

function getSegmentColor(topicName: string, segment: SegmentKey) {
  const index = data.findIndex((d) => d.name === topicName);

  if (index === -1) return "#999";

  if (segment === "low") return lowColors[index];
  if (segment === "mid") return midColors[index];
  return highColors[index];
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipEntry[];
  label?: string;
}) {
  if (!active || !payload?.length || !label) return null;

  return (
    <div className="rounded border border-gray-300 bg-white px-3 py-2 text-xs shadow">
      <p className="mb-1 font-semibold text-gray-700">{label}</p>

      {payload
        .slice()
        .reverse()
        .map((entry, i) => {
          const segment = entry.dataKey as SegmentKey;
          const color = getSegmentColor(label, segment);

          return (
            <div key={`${entry.name}-${i}`} className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-gray-700">
                {entry.name}: {entry.value}
              </span>
            </div>
          );
        })}
    </div>
  );
}

export default function PercentBarChart() {
  return (
    <div className="h-full w-full min-h-0 min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barCategoryGap="0%"
          barGap={0}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis
            domain={[0, 100]}
            ticks={[0, 50, 100]}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />

          <Bar dataKey="low" stackId="a" name="Low">
            {data.map((_, i) => (
              <Cell key={`low-${i}`} fill={lowColors[i]} />
            ))}
          </Bar>

          <Bar dataKey="mid" stackId="a" name="Mid">
            {data.map((_, i) => (
              <Cell key={`mid-${i}`} fill={midColors[i]} />
            ))}
          </Bar>

          <Bar dataKey="high" stackId="a" name="High">
            {data.map((_, i) => (
              <Cell key={`high-${i}`} fill={highColors[i]} />
            ))}
            <LabelList dataKey="total" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}