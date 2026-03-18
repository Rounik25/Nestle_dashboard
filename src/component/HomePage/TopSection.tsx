import { HomeKPI } from "../common/HomeKPI";
import { KPI1 } from "./KPI/KPI1";
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
        <div className="flex h-60 w-240">
            <HomeKPI 
                icon="src\assets\Home Page\HomeKPI2.svg"
                title="This is a very very long heading and it will surely overflow"
                // inner={<ExpandableDiv sections={sectionsData} title={tempTitle} icon={tempIcon} />}
                inner={<KPI1/>}
            />
        </div>
    )
}