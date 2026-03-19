import { Kpi_data1, Kpi_data2, Kpi_data3, Kpi_data4, Kpi_data5 } from "../../utils/HomePage/kpi_data";
import { HomeKPI1 } from "./HomeKPI1";
import { HomeKPI2 } from "./HomeKPI2";
import { HomeKPI3 } from "./HomeKPI3";
import { HomeKPI4 } from "./HomeKPI4";
import { HomeKPI5 } from "./HomeKPI5";

export function TopSection(){
    return(
        <div className="flex flex-col h-full w-full min-h-0 min-w-0 pb-5">
            <div className="h-2/5 w-full grid grid-cols-[3fr_2fr] gap-3 pb-3">
               <HomeKPI1 icon={Kpi_data1.icon} title={Kpi_data1.title}/>
               <HomeKPI2 icon={Kpi_data2.icon} title={Kpi_data2.title} sections={Kpi_data2.sections}/>
            </div>
            <div className="flex-1 w-full grid grid-cols-[4fr_3fr_2fr] gap-3 pb-3">
               <HomeKPI3 icon={Kpi_data3.icon} title={Kpi_data3.title}/>
               <HomeKPI4 icon={Kpi_data4.icon} title={Kpi_data4.title} sections={Kpi_data4.sections}/>
               <HomeKPI5 icon={Kpi_data5.icon} title={Kpi_data5.title}/>
            </div>
        </div>
    )
}