import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    LabelList,
    Legend
} from "recharts";

const COLORS = ["#9CA3AF", "#6B7280", "#4B5563", "#3B82F6", "#1E3A8A"];

export default function StackedBarChart() {
    const data = [
        {
            name: "From Nestle",
            "Others": 15,
            "Fresh Water": 20,
            "Tech and Innovation": 15,
            "Circularity": 5,
            "Food System": 45,
        },
        {
            name: "About Nestle",
            "Others": 30,
            "Fresh Water": 10,
            "Tech and Innovation": 15,
            "Circularity": 0,
            "Food System": 45,
        },
        {
            name: "Industry",
            "Others": 25,
            "Fresh Water": 15,
            "Tech and Innovation": 15,
            "Circularity": 10,
            "Food System": 35,
        },
    ];

    return (
        <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    barCategoryGap="20%"
                    barGap={2}
                >
                    <XAxis
                        dataKey="name"
                        tickLine={false} 
                    />
                    <YAxis 
                        axisLine={false}
                        tickLine={false}
                        ticks={[0,20,40,60,80,100]}
                    />

                    <Legend wrapperStyle={{ fontSize: "10px" }} />

                    {["Others","Fresh Water","Tech and Innovation","Circularity","Food System"].map((key, i) => (
                        <Bar key={key} dataKey={key} stackId="stack" fill={COLORS[i]}>
                            <LabelList
                                dataKey={key}
                                position="center"
                                fill="#ffffff"
                                formatter={(value) =>
                                    typeof value === "number" && value > 0 ? `${value}%` : ""
                                }
                            />
                        </Bar>
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}