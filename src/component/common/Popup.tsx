import { ChevronDown, X } from "lucide-react";

type Section = {
  id: string;
  heading: string;
  content: string;
};

type PopupProps = {
  sections: Section[];
  expandedIds: string[];
  onToggle: (id: string) => void;
  onClose: () => void;
  onExpandAll: () => void;
  onCollapseAll: () => void;
};

export function Popup({
  sections,
  expandedIds,
  onToggle,
  onClose,
  onExpandAll,
  onCollapseAll,
}: PopupProps) {
  return (
    <>
      {/* overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
      />

      {/* popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* header */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-xl font-semibold">All Headings</h2>

            <div className="flex gap-2">
              <button onClick={onExpandAll} className="btn">
                Expand all
              </button>
              <button onClick={onCollapseAll} className="btn">
                Collapse all
              </button>
              <button onClick={onClose}>
                <X size={18} />
              </button>
            </div>
          </div>

          {/* content */}
          <div className="max-h-[calc(85vh-72px)] overflow-y-auto p-6 space-y-4">
            {sections.map((section) => {
              const isExpanded = expandedIds.includes(section.id);

              return (
                <div key={section.id} className="border rounded-xl">
                  <button
                    onClick={() => onToggle(section.id)}
                    className="flex w-full justify-between px-4 py-4 text-left"
                  >
                    <span>{section.heading}</span>
                    <ChevronDown
                      className={`transition ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="border-t px-4 py-4 text-sm">
                      {section.content}
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