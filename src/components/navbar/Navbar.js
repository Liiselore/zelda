import "./navbar.css";
import {useState} from "react";
import search from './search_FILL0_wght400_GRAD0_opsz24.png';
import { AiOutlineSearch } from 'react-icons/ai'

export default function Navbar() {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return (
        <>
            <nav>
                <h1>Zelda</h1>
                <div className={"searchbar"}>
                    <input className={"searchbar-text"}
                           type={"text"}
                           label={"search"}
                           placeholder={"Search"}
                           value={searchInput}
                           onChange={handleChange}
                    />
                    <AiOutlineSearch className="searchIcon" size={40}/>
                </div>
            </nav>

        </>
    )
}
