import { useState } from "react";
import { Link } from "react-router-dom";
import StackedAreaChart from "./component/NarrativeScan/StackedAreaChart";
import BarChart1 from "./component/NarrativeScan/BarChart1";
import PercentBarChart from "./component/NarrativeScan/PercentBarChart";
import { BarChart2 } from "./component/NarrativeScan/Barchart2";

export function NarrativeScan() {
    const [view, setView] = useState(false);

    const cards = [
        {
            title: "Which themes dominate their narrative?",
            subtitle: "Share of voice of sustainability topics",
            content: <StackedAreaChart />,
            contentClassName: "flex h-full w-full",
        },
        {
            title: "How does this compare vs. competitors?",
            subtitle: "Share of voice of sustainability topics",
            content: <BarChart1 />,
            contentClassName: "flex h-full w-full",
        },
        {
            title: "Which sub-themes dominate their narrative?",
            subtitle: "Share of voice of sustainability topics",
            content: <PercentBarChart />,
            contentClassName: "flex h-full w-full pr-10",
        },
        {
            title: "Which themes dominate their narrative?",
            subtitle: "Share of voice of sustainability topics",
            content: <BarChart2 />,
            contentClassName: "flex h-full w-full",
        },
    ];

    return (
        <div className="flex h-full w-full min-h-0 min-w-0 flex-col">
            
            <div className="flex w-full min-w-0 shrink-0 text-3xl font-bold">
                <Link className="cursor-pointer pr-2 pt-1" to="/">
                    <img
                        src="src/assets/NarrativeScan/NarrativeScanArrow.svg"
                        alt="back arrow"
                    />
                </Link>

                <div className="flex w-full pb-2">Narrative Scan for Nestlé</div>

                <button onClick={() => setView((prev) => !prev)} className="cursor-pointer">
                    <img
                        src={
                            view
                                ? "src/assets/NarrativeScan/NarrativeScanToggle2.svg"
                                : "src/assets/NarrativeScan/NarrativeScanToggle1.svg"
                        }
                        alt="toggle view"
                    />
                </button>
            </div>

            <div
                className={
                    view
                        ? "grid h-full min-h-0 w-full min-w-0 grid-cols-1 auto-rows-[100%] gap-20 py-10 px-80"
                        : "grid h-full min-h-0 w-full min-w-0 grid-cols-2 grid-rows-2 gap-5 px-10"
                }
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`flex min-h-0 flex-col rounded-2xl bg-white px-5 py-2 shadow-lg ${view ? "h-full" : ""
                            }`}
                    >
                        <div className="w-full shrink-0">
                            <div className="text-xl font-bold">{card.title}</div>
                            <div className="px-5 text-md font-bold">{card.subtitle}</div>
                        </div>

                        <div className={`${card.contentClassName} min-h-0 flex-1 my-2`}>
                            {card.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}