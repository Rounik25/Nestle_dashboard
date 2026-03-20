import StackedBarChart from "./StackedBarChart";
import { Link } from "react-router-dom";

export function KPI3() {
  return (
    <div className="flex flex-col h-full w-full min-h-0 min-w-0 overflow-hidden">
      <div className="flex flex-1 w-full min-h-0 min-w-0 overflow-hidden">
        <div className="flex h-full w-full pr-5">
          <StackedBarChart />
        </div>
      </div>
      <div className="flex justify-end w-full min-w-0 min-h-0 px-2 py-2">
        <Link
          className="px-3 py-1 bg-amber-700 shadow-sm hover:bg-amber-600 text-white rounded-full"
          to="/NarrativeScan"
        >
          More
        </Link>
      </div>
    </div>
  )
}