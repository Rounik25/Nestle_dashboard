import { useState } from "react";
import { Popup } from "./Popup";

type Section = {
    id: string;
    heading: string;
    content: string[];
};

type ExpandableHeadingsProps = {
    sections?: Section[],
    title: string,
    icon: string,
};

export function ExpandableDiv({
    sections = [], title = "", icon = ""
}: ExpandableHeadingsProps) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [expandedIds, setExpandedIds] = useState<string[]>([]);

    // const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);

    function openPopup(expandedId?: string) {
        setIsPopupOpen(true);

        if (expandedId) {
            setExpandedIds([expandedId]);
        } else {
            setExpandedIds([]);
        }
    }

    function closePopup() {
        setIsPopupOpen(false);
        setExpandedIds([]);
    }

    function toggleExpanded(id: string) {
        setExpandedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    }

    // function expandAll() {
    //     setExpandedIds(sectionIds);
    // }

    // function collapseAll() {
    //     setExpandedIds([]);
    // }

    return (
        <div className={`relative h-full w-full min-h-0 min-w-0 bg-white  ${isPopupOpen ? "overflow-hidden" : ""}`}>
            <div className={`flex flex-col h-full w-full overflow-hidden ${isPopupOpen ? "pointer-events-none select-none" : ""}`}>
                <div className="flex w-full h-full min-w-0 min-h-0 overflow-hidden">
                    <div className="flex flex-col px-15 gap-2 justify-evenly overflow-y-auto">
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                className="flex rounded-2xl pl-5 shadow-sm border-1 border-gray-200"
                            >
                                <div className="flex flex-1 items-start justify-between">
                                    <h2 className="flex felx-wrap py-2 pr-5 min-h-10 items-center text-sm font-medium text-gray-900">{section.heading}</h2>
                                </div>
                                <div className="flex items-end">
                                    <button
                                        type="button"
                                        onClick={() => openPopup(section.id)}
                                        className="flex h-5 w-5"
                                    >
                                        <img src="src\assets\Home Page\down.svg" alt="downLogo" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                </div>
                <div className="flex justify-end w-full min-w-0 px-2 py-2">
                    <button
                        className="px-3 py-1 bg-amber-700 shadow-sm hover:bg-amber-600 text-white rounded-full"
                        onClick={() => openPopup()}
                    >
                        More
                    </button>
                </div>
            </div>

            {isPopupOpen && (
                <Popup
                    sections={sections}
                    expandedIds={expandedIds}
                    onToggle={toggleExpanded}
                    onClose={closePopup}
                    title={title}
                    icon={icon}
                />
            )}
        </div>
    );
}