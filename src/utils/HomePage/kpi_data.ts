import type React from "react";
import { KPI1 } from "../../component/HomePage/KPI/KPI1";
import { ExpandableDiv } from "../../component/common/ExpandableDiv";
import { KPI3 } from "../../component/HomePage/KPI/KPI3";
import { KPI5 } from "../../component/HomePage/KPI/KPI5";

type KPIItem1 =
    | {
        id: number;
        icon: string;
        title: string;
        inner: typeof KPI1;
        props: React.ComponentProps<typeof KPI1>;
    }
    | {
        id: number;
        title: string;
        inner: typeof ExpandableDiv;
        props: React.ComponentProps<typeof ExpandableDiv>;
    };
type KPIItem2 =
    | {
        id: number;
        icon: string;
        title: string;
        inner: typeof KPI3;
        props: React.ComponentProps<typeof KPI3>;
    }
    | {
        id: number;
        title: string;
        inner: typeof ExpandableDiv;
        props: React.ComponentProps<typeof ExpandableDiv>;
    }
    | {
        id: number;
        icon: string;
        title: string;
        inner: typeof KPI5;
        props: React.ComponentProps<typeof KPI5>;
    };

export const KPI_data2: KPIItem2[] = [
    {
        id: 1,
        icon: "src/assets/Home Page/HomeKPI3.svg",
        title: "Nestlé's narrative scan",
        inner: KPI3,
        props: {}
    },
    {
        id: 2,
        icon: "src/assets/Home Page/HomeKPI4.svg",
        title: "Nestlé faces 3 near-term disruptions",
        inner: ExpandableDiv,
        props: {
            title: "Nestlé faces 3 near-term disruptions",
            icon: "src/assets/Home Page/HomeKPI4.svg",
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
    },
    {
        id: 3,
        icon: "src/assets/Home Page/HomeKPI3.svg",
        title: "Nestlé's top 5 sustainability priorities",
        inner: KPI5,
        props: {}
    },
];
export const KPI_data1: KPIItem1[] = [
    {
        id: 1,
        icon: "src/assets/Home Page/HomeKPI1.svg",
        title: "Nestlé's commitment to Sustainability",
        inner: KPI1,
        props: {}
    },
    {
        id: 2,
        icon: "src/assets/Home Page/HomeKPI2.svg",
        title: "Competitors are moving much faster on Sustainability x AI innovations",
        inner: ExpandableDiv,
        props: {
            title: "Competitors are moving much faster on Sustainability x AI innovations",
            icon: "src/assets/Home Page/HomeKPI2.svg",
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
    }
];
