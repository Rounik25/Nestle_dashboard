type data1 = {
    icon: string;
    title: string;
}

type section = {
    id: string,
    heading: string,
    content: string[],
}

type data2 = {
    icon: string;
    title: string;
    sections: section[]
}

type data3 = {
    icon: string;
    title: string;
}

export const Kpi_data1: data1 = {
    icon: "src/assets/Home Page/HomeKPI1.svg",
    title: "Nestlé's commitment to Sustainability",
}

export const Kpi_data2: data2 = {
    icon: "src/assets/Home Page/HomeKPI2.svg",
    title: "Competitors are moving much faster on Sustainability x AI innovations",
    sections: [
        {
            id: "h1",
            heading: "PepsiCo introduced low carbon electric  tractors through their Greenhouse Accelerator Program",
            content: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Id eveniet fuga placeat excepturi dolorem consequatur eum nesciunt,",
                "ex, unde similique in enim distinctio expedita quisquam officia.",
                "Soluta mollitia aliquam quidem?"
            ]
        },
        {
            id: "h2",
            heading: "Unilever attempts to screen for lower impact materials using AI simulations",
            content: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Id eveniet fuga placeat excepturi dolorem consequatur eum nesciunt,",
                "ex, unde similique in enim distinctio expedita quisquam officia.",
                "Soluta mollitia aliquam quidem?"
            ]
        },
    ]
}

export const Kpi_data3: data3 = {
    icon: "src/assets/Home Page/HomeKPI3.svg",
    title: "Nestlé's narrative scan",
}
export const Kpi_data4: data2 = {
    icon: "src/assets/Home Page/HomeKPI4.svg",
    title: "Nestlé faces 3 near-term disruptions",
    sections: [
        {
            id: "h1",
            heading: "EU has introduced new legislation around packaging/virgin plastic bans",
            content: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Id eveniet fuga placeat excepturi dolorem consequatur eum nesciunt,",
                "ex, unde similique in enim distinctio expedita quisquam officia.",
                "Soluta mollitia aliquam quidem?"
            ]
        },
        {
            id: "h2",
            heading: "Consumers are increasingly concerned about palm oil",
            content: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Id eveniet fuga placeat excepturi dolorem consequatur eum nesciunt,",
                "ex, unde similique in enim distinctio expedita quisquam officia.",
                "Soluta mollitia aliquam quidem?"
            ]
        },
        {
            id: "h3",
            heading: "Smart packaging allows for real-time shelf-life monitoring and cold chain disruption",
            content: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Id eveniet fuga placeat excepturi dolorem consequatur eum nesciunt,",
                "ex, unde similique in enim distinctio expedita quisquam officia.",
                "Soluta mollitia aliquam quidem?"
            ]
        },
    ]
}

export const Kpi_data5: data3 = {
    icon: "src/assets/Home Page/HomeKPI5.svg",
    title: "Nestlé's top 5 sustainability priorities",
}
