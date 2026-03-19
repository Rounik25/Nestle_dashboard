import { TopSection } from "./component/HomePage/TopSection";
import { BottomSection } from "./component/HomePage/BottomSection";
import { SearchBar } from "./component/common/SearchBar";

export default function HomePage() {
    return (
        <div className="flex flex-col h-full w-full min-h-225 min-w-0 overflow-y-auto ">
            <div className="flex h-25 min-h-0 w-full min-w-0 pt-4 pb-1" >
                <SearchBar />
            </div>
            <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-auto">
                <TopSection />
            </div>
            <div className="flex min-h-50 w-full min-w-0 overflow-y-auto">
                <BottomSection />
            </div>
        </div>
    )
}