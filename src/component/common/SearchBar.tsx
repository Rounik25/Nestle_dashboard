import { useLocation } from "react-router-dom";
import { FilterIcon, Search } from "lucide-react";

export function SearchBar() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
        <div className="relative flex h-full w-full min-w-0 min-h-0 overflow-hidden justify-center items-center">
            {isHome && (
                <div className="absolute left-5 flex h-full w-full items-center justify-start">
                    <div className="h-full min-h-0 min-w-0 overflow-hidden flex items-center ml-10 mr-5 border-2 border-black px-1 rounded-full bg-gray-300">
                        <img
                            src="/src/assets/nestle.svg"
                            alt="logo"
                            className="h-4/5 object-contain"
                            />
                    </div>
                    <div className="text-4xl font-bold">Nestlé</div>
                </div>
            )}

            <div className="relative flex w-full max-w-xl min-h-0 min-w-0 shrink-0 overflow-hidden">

                {/* Icon */}
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                {/* Input */}
                <input
                    type="text"
                    placeholder="Search Client..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg font-bold"
                />

                <div className="flex p-2 font-bold text-gray-500">
                    Filter
                    <FilterIcon className="p-1" />
                </div>
            </div>


        </div>
    )
}