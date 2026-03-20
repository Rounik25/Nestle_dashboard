import { X } from "lucide-react";

type Section = {
    id: string;
    heading: string;
    content: string[];
};

type PopupProps = {
    sections: Section[];
    expandedIds: string[];
    onToggle: (id: string) => void;
    onClose: () => void;
    title: string;
    icon: string;
};

export function Popup({
    sections,
    expandedIds,
    onToggle,
    onClose,
    title = "",
    icon = "",
}: PopupProps) {
    return (
        <>
            {/* overlay */}
            <div
                className="fixed inset-0 z-40 bg-black/50"
                onClick={onClose}
            />

            {/* popup */}
            <div className="fixed inset-0 h-full z-50 flex items-center justify-center p-4">
                <div
                    className="relative max-h-[85vh] flex flex-col basis-3/5 overflow-hidden rounded-2xl bg-white shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* header */}
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className="flex">
                            <div className="flex h-full h-8">
                                <img src={icon} alt="Heading Logo" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold px-2">{title}</h2>
                            </div>

                        </div>
                        <div className="flex gap-2">
                            <button onClick={onClose}>
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* content */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
                        {sections.map((section) => {
                            const isExpanded = expandedIds.includes(section.id);

                            return (
                                <div key={section.id} className="flex flex-col border-b-1 border-black">
                                    <div className="flex justify-between">
                                        <div className="flex min-h-10 items-center">
                                            {section.heading}
                                        </div>
                                        <div className="flex items-start h-full">
                                            <button
                                                onClick={() => onToggle(section.id)}
                                                className="flex w-full justify-between text-left min-h-10 min-w-10 items-start"
                                            >
                                                <img src="src\assets\Home Page\down.svg" alt="down logo" className={`transition ${isExpanded ? "rotate-180" : ""}`} />
                                            </button>
                                        </div>
                                    </div>

                                    {isExpanded && (
                                        <div className="px-4 py-4 text-sm">
                                            <ul style={{ listStyleType: 'disc' }} className="pl-2">
                                                {section.content.map(child => {
                                                    return(
                                                        <li key={child} className="">{child}</li>        
                                                    )})}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
