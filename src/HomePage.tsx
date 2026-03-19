import { TopSection } from "./component/HomePage/TopSection";
import { BottomSection } from "./component/HomePage/BottomSection";

export default function HomePage() {
    return (
        <div className="flex flex-col h-full w-full min-h-240 min-w-0 overflow-y-auto ">
            <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-auto">
                <TopSection />
            </div>
            <div className="flex min-h-70 w-full min-w-0 overflow-y-auto">
                <BottomSection />
            </div>
        </div>
    )
}