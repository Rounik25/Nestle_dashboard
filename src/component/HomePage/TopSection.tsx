import { HomeKPI } from "../common/HomeKPI";
import { KPI1 } from "./KPI1";

export function TopSection(){
    return(
        <div className="flex h-60 w-230">
            <HomeKPI 
                icon="src\assets\Home Page\HomeKPI1.svg"
                title="This is a dummy title"
                inner={<KPI1 />}
                button="More"
                onClick={()=>{console.log("hello")}}
            />
        </div>
    )
}