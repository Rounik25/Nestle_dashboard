import { IndustryAvgChart } from "./IndustryAvgChart";
import { RadialGauge } from "./RadialGauge";

type ChartRow = {
    name: string;
    value: number;
    marker?: number;
    color: string;
};

const data: ChartRow[] = [
  {
    name: "Commitments off track",
    value: 30,
    marker: 85,
    color: "#b91c1c",
  },
  {
    name: "Stakeholder sentiment",
    value: -12,
    marker: 40,
    color: "#dc2626",
    // showPercent is optional here
  },
  {
    name: "Sustainability Share of voice",
    value: 20,
    marker: 60,
    color: "#6b7280",
  },
];

export function KPI1(){
    return(
        <div className="flex h-full w-full min-h-0 min-w-0 overflow-hidden">
            <div className="flex flex-1 w-full min-h-0 min-w-0">
                <div className="flex flex-1 justify-center flex-col h-full basis-2/5">
                    <div className="flex text-sm px-5 font-semibold">Priority Score</div>
                    <div className="h-3/5">
                        <RadialGauge value={66} />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-lg font-bold">66%</div>
                        <div className="text-sm font-semibold">Median score of <span className="text-amber-400 font-bold">35%</span></div>
                    </div>
                </div>
                <div className="flex flex-col h-full basis-3/5">
                    <div className="flex h-5">
                        <div className="flex font-semibold">Industry average</div>
                        <div className="flex h-full w-1 bg-amber-400 m-1"></div>
                    </div>
                    <div className="flex flex-1 pt-3 px-2">
                        <IndustryAvgChart data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}