type homeProp = {
    title: string,
    click: () => void
}

export function HomeRecommended({
    title, click
} : homeProp )
{
    return(
        <div className="flex flex-col h-full w-full min-w-0 min-h-0 overflow-hidden p-5 rounded-2xl bg-white shadow-md">
            <div className="h-1/2 w-full min-w-0 flex min-h-0 items-start shrink-0 font-bold">
                {title}
            </div>
            <div className="h-1/2 w-full min-w-0 min-h-0 flex justify-between items-end px-5 pt-2" >
                <button onClick={click} className="px-5 mr-5 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-full shadow-lg flex-5">
                    Link to relevant Bain IP
                </button>
                <button onClick={click} className="px-auto py-2 bg-amber-700 hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg flex-4">
                    Understand Why?
                </button>
            </div>
        </div>
    )
}