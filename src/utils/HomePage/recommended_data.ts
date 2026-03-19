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
        title: "Prepare Nestlé for upcoming EU policy shifts on virgin plastics",
        click: () => {console.log("hello")}
    },
    {
        id: 3,
        title: "Prepare Nestlé for upcoming EU policy shifts on virgin plastics",
        click: () => {console.log("hello")}
    },
]