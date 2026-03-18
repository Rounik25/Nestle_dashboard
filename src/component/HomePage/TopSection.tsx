import { HomeKPI } from "../common/HomeKPI";
import { KPI3 } from "./KPI/KPI3";
// import { KPI1 } from "./KPI/KPI1";
// import { ExpandableDiv } from "../common/ExpandableDiv";


// type Section = {
//   id: string;
//   heading: string;
//   content: string[];
// };

// const sectionsData: Section[] = [
//   {
//     id: "commitments",
//     heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium fugit labore accusamus sequi, ut ex quia repudiandae dicta! Maiores vero possimus quaerat blanditiis iure error incidunt itaque, culpa quidem!",
//     content:
//       [
//         "Detailed explanation for commitments off track goes here. You can replace this with dynamic content from your API or props.",
//         "Hello world meow"
//       ],
//   },
//   {
//     id: "stakeholder",
//     heading: "Stakeholder sentiment",
//     content:
//       ["Detailed explanation for stakeholder sentiment goes here. Add as much text as needed."],
//   },
// ];

// const tempTitle : string = "This is a temporary title"
// const tempIcon : string = "src/assets/Home Page/HomeKPI2.svg"

export function TopSection(){
    return(
        <div className="flex h-70 w-120">
            <HomeKPI 
                icon="src\assets\Home Page\HomeKPI3.svg"
                title="This is a dummy heading"
                // inner={<ExpandableDiv sections={sectionsData} title={tempTitle} icon={tempIcon} />}
                inner={<KPI3/>}
            />
        </div>
    )
}