import { Link } from "react-router-dom"
import { dataRecommendations } from "./utils/Recommendations/RecommendationsData"

export function Recommendations() {
    return (
        <div className="flex flex-col h-full min-h-0 w-full min-w-0 overflow-hidden">
            <div className="flex w-full min-w-0 shrink-0 text-3xl font-bold">
                <Link className="cursor-pointer pr-2 pt-1" to="/">
                    <img
                        src="src/assets/NarrativeScan/NarrativeScanArrow.svg"
                        alt="back arrow"
                    />
                </Link>

                <div className="flex w-full pb-2">Recommendations</div>
            </div>

            <div className="flex flex-1 w-full min-h-0 min-w-0 overflow-hidden gap-5 py-5">
                {dataRecommendations.map((data) => {
                    return (
                        <div
                            key={data.id}
                            className="flex flex-col h-full w-1/3 min-h-0 min-w-0 overflow-hidden bg-white rounded-xl shadow-md pt-3"
                        >
                            {/* Title */}
                            <div className="shrink-0 flex w-full flex-wrap p-5 text-xl font-bold">
                                <div className="flex min-h-10">
                                    <img
                                        src="src/assets/thumbs-up.svg"
                                        className="h-6 pr-2"
                                        alt="thumbs up logo"
                                    />
                                    <div>{data.title}</div>
                                </div>
                            </div>

                            {/* Remaining content */}
                            <div className="flex flex-col flex-1 min-h-0 w-full px-10 pb-6">
                                {/* Why section */}
                                <div className="flex flex-col flex-1 min-h-0">
                                    <div className="shrink-0 font-semibold text-lg w-full pb-2">
                                        Understand Why?
                                    </div>

                                    <div className="flex-1 min-h-0 overflow-auto">
                                        <ul className="pl-5 list-disc">
                                            {data.why.map((point) => (
                                                <li className="py-2" key={point}>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Links section */}
                                <div className="shrink-0 pt-4">
                                    <div className="flex font-bold text-xl w-full py-2">
                                        <div className="flex pr-2">
                                            <img
                                                src="src/assets/link.svg"
                                                alt="link logo"
                                            />
                                        </div>
                                        <div>Links</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 w-full">
                                        {data.links.map((link) => (
                                            <button
                                                className="py-2 px-4 bg-amber-700 rounded-full text-white font-semibold hover:bg-amber-600 shadow-md"
                                                key={link}
                                            >
                                                {link}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}