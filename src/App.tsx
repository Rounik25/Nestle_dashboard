import Navbar from "./component/common/Navbar"
import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import { SearchBar } from "./component/common/SearchBar"


function App() {

  return (
    <div className="flex flex-col overflow-y-auto h-screen min-h-screen w-full min-w-0 bg-gray-100">
      <div className="flex h-15 min-h-15 w-full min-w-0 shadow-sm border-b-2 border-gray-400">
        <Navbar />
      </div>
      <div className="flex h-25 min-h-0 w-full min-w-0 pt-2">
        <SearchBar />
      </div>
      <main className="h-full min-h-0 min-w-0 overflow-auto p-10 pt-5">
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
