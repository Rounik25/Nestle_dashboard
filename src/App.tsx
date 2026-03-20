import Navbar from "./component/common/Navbar"
import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import { NarrativeScan } from "./NarrativeScan"
import { Recommendations } from "./Recommendations"


function App() {

  return (
    <div className="flex flex-col overflow-y-auto h-screen min-h-screen w-full min-w-0 bg-gray-100">
      <div className="flex h-15 min-h-15 w-full min-w-0 shadow-sm border-b-2 border-gray-400">
        <Navbar />
      </div>
      <main className="h-full min-h-0 min-w-0 overflow-auto px-10 py-5 overflow-y-auto">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/NarrativeScan' element={<NarrativeScan />} />
          <Route path='/Recommendations' element={<Recommendations />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
