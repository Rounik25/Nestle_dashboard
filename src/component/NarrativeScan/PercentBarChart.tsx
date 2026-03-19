import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Freshwater", total: 23, low: 58, mid: 24, high: 18 },
  { name: "Energy Transition", total: 45, low: 78, mid: 8, high: 14 },
  { name: "Decarbonization", total: 30, low: 75, mid: 10, high: 15 },
  { name: "Biodiversity", total: 15, low: 52, mid: 23, high: 25 },
];

const lowColors = ["#264b17", "#214b7d", "#6b6b6b", "#5a4a4a"];
const midColors = ["#315f1f", "#38639a", "#555555", "#8a6d6d"];
const highColors = ["#6e9a63", "#5f88c9", "#2f415d", "#bf6d69"];

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
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            domain={[0, 100]}
            ticks={[0, 50, 100]}
            tickLine={false}
            axisLine={false}
          />

          <Bar dataKey="low" stackId="a">
            {data.map((_, i) => (
              <Cell key={`low-${i}`} fill={lowColors[i]} />
            ))}
          </Bar>

          <Bar dataKey="mid" stackId="a">
            {data.map((_, i) => (
              <Cell key={`mid-${i}`} fill={midColors[i]} />
            ))}
          </Bar>

          <Bar dataKey="high" stackId="a">
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