import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    LabelList,
    Legend
} from "recharts";

const COLORS = ["#1E3A8A", "#386d64", "#2f3e63", "#857c2b", "#65450f"];

export default function BarChart1() {
    const data = [
        {
            name: "Nestle",
            "Fresh Water": 0,
            "Tech and Innovation": 2,
            "Circularity": 3,
            "Food System": 9,
        },
        {
            name: "Uniliver",
            "Fresh Water": 5,
            "Tech and Innovation": 3,
            "Circularity": 2,
            "Food System": 7,
        },
        {
            name: "Industry",
            "Fresh Water": 10,
            "Tech and Innovation": 3,
            "Circularity": 2,
            "Food System": 5,
        },
    ].map((d) => ({
        ...d,
        total:
            (d["Fresh Water"] || 0) +
            (d["Tech and Innovation"] || 0) +
            (d["Circularity"] || 0) +
            (d["Food System"] || 0),
    }));;

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
                        ticks={[0, 5, 10, 15, 20, 25]}
                    />

                    <Legend wrapperStyle={{ fontSize: "10px" }} iconType="square" />

                    {["Fresh Water", "Tech and Innovation", "Circularity", "Food System"].map((key, i, arr) => (
                        <Bar key={key} dataKey={key} stackId="stack" fill={COLORS[i]}>

                            {/* Inner segment labels */}
                            <LabelList
                                dataKey={key}
                                position="center"
                                fill="#ffffff"
                                formatter={(value) =>
                                    typeof value === "number" && value > 0 ? `${value}%` : ""
                                }
                            />

                            {/* Total label ONLY on top stack */}
                            {i === arr.length - 1 && (
                                <LabelList
                                    dataKey="total"
                                    position="top"
                                    formatter={(value) =>
                                        typeof value === "number" && value > 0 ? `${value}%` : ""
                                    }
                                />
                            )}

                        </Bar>
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}