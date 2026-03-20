import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Navbar(){

    return(
        <div className="flex h-full min-h-0 w-full min-w-0 overflow-hidden bg-gray-50 justify-between">
            <div className="flex h-full py-2 pr-5">
                <Link to="/" className="flex h-full">
                    <img src="src\assets\TrueNorthLogo.svg" alt="NavbarLogo" />
                </Link>
            </div>
            <div className="flex h-full min-h-0 min-w-0 overflow-hidden px-10">
                <nav  className="flex gap-4 items-center overflow-x-auto scrollbar-hide whitespace-nowrap min-w-0 px-1">
                    <NavLink to="/">
                        Home   
                    </NavLink>    
                    <NavLink to="/NarrativeScan">
                        Narrative Scan    
                    </NavLink>    
                    <NavLink to="/Recommendations">
                        Recommendations    
                    </NavLink>    
                </nav> 
            </div>
        </div>
    )
}