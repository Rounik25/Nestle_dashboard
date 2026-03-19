import { HomeKPI } from "../common/HomeKPI";
import { KPI_data1 } from "../../utils/HomePage/kpi_data";
import { KPI_data2 } from "../../utils/HomePage/kpi_data";

export function TopSection(){
    return(
        <div className="flex flex-col h-fit w-full min-h-0 min-w-0">
            <div className="h-2/5 w-full grid grid-cols-[3fr_2fr] gap-3 pb-3">
                {KPI_data1.map(data => {
                    const Component = data.inner;
                    return(
                        <HomeKPI key={data.id} icon={data.icon} title={data.title} inner={<Component {...data.props}/>} />
                    )
                })}
            </div>
            <div className="h-1/2 w-full grid grid-cols-[4fr_3fr_2fr] gap-3 pb-3">
                {KPI_data2.map(data => {
                    const Component = data.inner;
                    return(
                        <HomeKPI key={data.id} icon={data.icon} title={data.title} inner={<Component {...data.props}/>} />
                    )
                })}
            </div>
        </div>
    )
}