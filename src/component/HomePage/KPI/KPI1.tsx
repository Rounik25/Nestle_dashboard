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

export function KPI1({value}:{value : number}){
    console.log(value)
    return(
        <div className="flex h-full w-full min-h-0 min-w-0 overflow-hidden">
            <div className="flex flex-1 w-full min-h-0 min-w-0">
                <div className="relative flex flex-1 justify-center flex-col h-full basis-2/5">
                    <div className="absolute flex text-sm px-5 font-semibold top-1">Priority Score</div>
                    <div className="h-3/5">
                        <RadialGauge value={value} />
                    </div>
                    <div className="flex flex-col items-center pb-5">
                        <div className="text-lg font-bold">66%</div>
                        <div className="text-sm font-semibold">Median score of <span className="text-amber-400 font-bold">35%</span></div>
                    </div>
                </div>
                <div className="flex flex-col h-full basis-3/5">
                    <div className="flex h-4">
                        <div className="flex font-semibold text-sm">Industry average</div>
                        <div className="flex h-full w-1 bg-amber-400 m-1"></div>
                    </div>
                    <div className="flex flex-1 px-2">
                        <IndustryAvgChart data={data} />
                    </div>
                    <div className="flex justify-end w-full min-w-0 px-2 pb-1">
                        <button
                            className="px-3 pb-1 bg-amber-700 shadow-sm hover:bg-amber-600 text-white rounded-full"
                            onClick={() => {}}
                        >
                            more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}