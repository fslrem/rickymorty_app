import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, setAccess })=> {
    const handleLogOut = () => {
        setAccess(false);
    }
    return (
        <nav>
            <button><NavLink to="/about"> About </NavLink></button>
            <button><NavLink to="/home"> Home </NavLink></button>
            <button><NavLink to="/favorites"> Favorites </NavLink></button>

            <button onClick={handleLogOut}>Log Out</button>
            <SearchBar onSearch={onSearch}/>

        </nav>
    )
}

export default Nav;