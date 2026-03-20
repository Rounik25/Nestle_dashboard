import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    month: "Sep 2025",
    freshwater: 0,
    decarbonization: 2,
    biodiversity: 3,
    energyTransition: 9,
  },
  {
    month: "Oct 2025",
    freshwater: 5,
    decarbonization: 3,
    biodiversity: 2,
    energyTransition: 7,
  },
  {
    month: "Nov 2025",
    freshwater: 8,
    decarbonization: 5,
    biodiversity: 2,
    energyTransition: 5,
  },
];

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded border border-gray-300 bg-white px-3 py-2 text-xs shadow">
      <p className="mb-1 font-semibold text-gray-700">{label}</p>
      {payload
        .slice()
        .reverse()
        .map((entry) => (
          <div key={entry.name} className="flex items-center gap-2">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-700">
              {entry.name}: {entry.value}
            </span>
          </div>
        ))}
    </div>
  );
}

export default function StackedAreaChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right:20, left: 0, bottom: 0 }}
        >
          <CartesianGrid stroke="none" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} width={25} />
          <Tooltip content={<CustomTooltip />} />
          <Legend  wrapperStyle={{ fontSize: "10px", paddingTop: "10px" }} iconType="square"/>

          <Area
            type="linear"
            dataKey="freshwater"
            stackId="1"
            name="Freshwater"
            stroke="#6aa84f"
            fill="#93c47d"
            dot={{ r: 4, strokeWidth: 2, fill: "#93c47d" }}
            activeDot={{ r: 5 }}
          />
          <Area
            type="linear"
            dataKey="decarbonization"
            stackId="1"
            name="Decarbonization"
            stroke="#5b4db1"
            fill="#7e72d8"
            dot={{ r: 4, strokeWidth: 2, fill: "#7e72d8" }}
            activeDot={{ r: 5 }}
          />
          <Area
            type="linear"
            dataKey="biodiversity"
            stackId="1"
            name="Biodiversity"
            stroke="#2f9ae0"
            fill="#56b6f7"
            dot={{ r: 4, strokeWidth: 2, fill: "#56b6f7" }}
            activeDot={{ r: 5 }}
          />
          <Area
            type="linear"
            dataKey="energyTransition"
            stackId="1"
            name="Energy transition"
            stroke="#b07d17"
            fill="#e2b35b"
            dot={{ r: 4, strokeWidth: 2, fill: "#e2b35b" }}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}