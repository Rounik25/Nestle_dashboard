import { useState } from "react"
import { Link } from "react-router-dom"
import StackedAreaChart from "./component/NarrativeScan/StackedAreaChart"
import BarChart1 from "./component/NarrativeScan/Barchart1"

export function NarrativeScan(){
    const [ view, setView ] = useState(false)
    return(
        <div className="h-full w-full min-h-0 min-w-0 flex flex-col">
            <div className="w-full min-h-0 min-w-0 flex shrink-0 text-3xl font-bold">
                <Link 
                    className="pr-2 pt-1 cursor-pointer"
                    to="/"
                >
                    <img src="src\assets\NarrativeScan\NarrativeScanArrow.svg" alt="back arrow" />
                </Link>
                <div className="flex w-full pb-2">
                    Narrative Scan for Nestlé
                </div>
                <button onClick={() => setView(prev => !prev)} className="cursor-pointer">
                    <img src={`${view ? "src/assets/NarrativeScan/NarrativeScanToggle2.svg" : "src/assets/NarrativeScan/NarrativeScanToggle1.svg"}`} alt="" />
                </button>
            </div>
            <div className="h-full w-full min-h-0 min-w-0 grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-5 px-10">
                <div className="flex flex-col py-2 bg-white px-5 rounded-2xl shadow-lg">
                    <div className="w-full">
                        <div className="text-xl font-bold">Which themes dominate their narrative?</div>
                        <div className="text-lg font-bold px-5">Share of voice of sustainability topics</div>
                    </div>
                    <div className="flex h-full w-full">
                        <StackedAreaChart />
                    </div>
                </div>
                <div className="flex flex-col py-2 bg-white px-5 rounded-2xl shadow-lg">
                    <div className="w-full">
                        <div className="text-xl font-bold">How does this compare vs. competitors?</div>
                        <div className="text-lg font-bold px-5">Share of voice of sustainability topics</div>
                    </div>
                    <div className="flex h-full w-full">
                        <BarChart1 />
                    </div>
                </div>
                <div className="flex flex-col py-2 bg-white px-5 rounded-2xl shadow-lg">
                    <div className="w-full">
                        <div className="text-xl font-bold">Which themes dominate their narrative?</div>
                        <div className="text-lg font-bold px-5">Share of voice of sustainability topics</div>
                    </div>
                    <div className="flex h-full w-full">
                        <StackedAreaChart />
                    </div>
                </div>
                <div className="flex flex-col py-2 bg-white px-5 rounded-2xl shadow-lg">
                    <div className="w-full">
                        <div className="text-xl font-bold">Which themes dominate their narrative?</div>
                        <div className="text-lg font-bold px-5">Share of voice of sustainability topics</div>
                    </div>
                    <div className="flex h-full w-full">
                        <StackedAreaChart />
                    </div>
                </div>
            </div>
        </div>
    )
}