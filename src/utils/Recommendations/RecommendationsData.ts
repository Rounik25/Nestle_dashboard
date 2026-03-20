type dataType = {
    id: string,
    title: string,
    links: string[],
    why: string[],
}

export const dataRecommendations: dataType[] = [
    {
        id: "h1",
        title: "Prepare Nestlé for upcoming EU policy shifts on virgin plastics",
        links: [
            "EU Packaging Rules",
            "EPR Guidelines",
            "Plastic Tax Trends",
            "Recycling"
        ],
        why: [
            "EU regulations are tightening around the use of virgin plastics, increasing compliance costs for FMCG companies.",
            "Early preparation helps avoid financial penalties and supply chain disruptions.",
            "Transitioning to recycled materials can unlock tax benefits and improve brand perception.",
            "Competitors are already committing to reduced virgin plastic usage, increasing pressure on Nestlé.",
            "Proactive adaptation enables Nestlé to influence policy discussions and industry standards."
        ]
    },
    {
        id: "h2",
        title: "Help Nestlé reposition their portfolio toward sustainable proteins and regen ag.",
        links: [
            "Alt Protein Trends",
            "Ag Frameworks",
            "Consumer Insights",
            "Case Studies"
        ],
        why: [
            "Consumer preferences are shifting toward plant-based and sustainably sourced food products.",
            "Sustainable proteins present a high-growth opportunity with strong future demand.",
            "Regenerative agriculture can improve supply chain resilience and reduce environmental impact.",
            "Investors are increasingly evaluating ESG performance in food companies.",
            "Repositioning the portfolio aligns Nestlé with long-term sustainability and profitability goals."
        ]
    },
    {
        id: "h3",
        title: "Build a circular packaging roadmap to help Nestlé save costs and build resilience",
        links: [
            "Circular Packaging",
            "Recycling Models",
            "Cost Savings",
            "FMCG Examples"
        ],
        why: [
            "Circular packaging reduces dependency on raw materials and lowers long-term costs.",
            "Improves resilience against supply chain volatility and material shortages.",
            "Helps meet regulatory requirements and sustainability commitments simultaneously.",
            "Enhances brand reputation among environmentally conscious consumers.",
            "Unlocks partnerships across recycling ecosystems and innovation networks."
        ]
    }
]