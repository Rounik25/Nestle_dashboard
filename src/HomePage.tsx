import { TopSection } from "./component/HomePage/TopSection";
import { BottomSection } from "./component/HomePage/BottomSection";

export default function HomePage() {
    return (
        <div className="flex flex-col h-full w-full min-h-0 min-w-0 overflow-hidden ">
            <div className="flex h-3/4 min-h-0 w-full min-w-0 overflow-hidden">
                <TopSection />
            </div>
            <div className="flex h-1/4 min-h-0 w-full min-w-0 overflow-hidden">
                <BottomSection />
            </div>
        </div>
    )
}