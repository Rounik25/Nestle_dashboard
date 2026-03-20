type recDataType = {
    id: number;
    title: string;
    click: () => void;
}

export const recommendedData : recDataType[] = [
    {   
        id: 1,
        title: "Prepare Nestlé for upcoming EU policy shifts on virgin plastics",
        click: () => {console.log("hello")}
    },
    {
        id: 2,
        title: "Help Nestlé reposition their portfolio toward sustainable proteins and regen ag.",
        click: () => {console.log("hello")}
    },
    {
        id: 3,
        title: "Build a circular packaging roadmap to help Nestlé save costs and build resilience",
        click: () => {console.log("hello")}
    },
]