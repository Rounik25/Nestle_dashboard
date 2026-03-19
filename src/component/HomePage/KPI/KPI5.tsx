type dataType = {
    id: number;
    text: string;
}

const data: dataType[] = [
    {
        id: 1,
        text: "Circular packaging"
    },
    {
        id: 2,
        text: "Regenrative agriculture"
    },
    {
        id: 3,
        text: "Supply chain resilience"
    },
    {
        id: 4,
        text: "Health and nutrition"
    },
    {
        id: 5,
        text: "Community engagement and development"
    },
]

export function KPI5() {
    return (
        <div className="flex flex-col h-full w-full min-h-0 min-w-0 overflow-hidden">
            <div className="flex flex-col flex-1 min-h-0 min-w-0 w-full overflow-hidden px-5">
                <ul style={{ listStyleType: 'disc' }} className="pl-5 flex flex-1 flex-col font-semibold text-sm">
                    {data.map(l => {
                        return (
                            <li key={l.id} className="py-1" >{l.text}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="flex justify-center w-full min-w-0 min-h-0 px-2 py-2">
                <button
                    className="px-3 py-1 bg-amber-700 shadow-sm hover:bg-amber-600 text-white rounded-full"
                    onClick={() => { }}
                >
                    More on Material Topics and ESG
                </button>
            </div>
        </div>
    )
}