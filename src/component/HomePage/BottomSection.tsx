import { HomeRecommended } from "../common/HomeRecommended"
import { recommendedData } from "../../utils/HomePage/recommended_data"

export function BottomSection(){
    return (
        <div className="h-full w-full min-w-0 flex flex-col overflow-hidden">
            <div className="w-full h-6 text-lg font-bold flex ">
                <img className="pr-2" src="src\assets\Recommended_logo.svg" alt="Recommended logo" />
                <div className="w-full min-w-0 shrink-0">Recommended actions</div>
            </div>
            <div className="flex flex-1 w-full gap-5">
                {recommendedData.map(data => {
                    return(
                        <div key={data.id} className="flex-1 w-1/3 pt-5 pb-2 rounded">
                            <HomeRecommended title={data.title} click={data.click} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}