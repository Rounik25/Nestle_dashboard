import { ExpandableDiv } from "./KPI/ExpandableDiv";

type Section = {
    id: string;
    heading: string;
    content: string[];
};

type HomeKPIProps = {
  icon: string;
  title: string;
  sections: Section[]
};

export function HomeKPI4({
  icon,
  title,
  sections
}: HomeKPIProps ){
    return(
        <div className="flex flex-col h-full min-h-0 w-full min-w-0 overflow-hidden bg-white rounded-2xl shadow-md">
            <div className="flex w-full min-h-5 h-auto px-3 pt-4">
                <div className="flex h-full">
                    <img src={icon} alt="KPI Logo"/>
                </div>
                <div className="flex flex-wrap px-2 font-bold text-md">{title}</div>
            </div>
            <div className="flex flex-1 w-full min-w-0 min-h-0 mt-5">
                <ExpandableDiv title={title} icon={icon} sections={sections} />
            </div>
        </div>
    )
}