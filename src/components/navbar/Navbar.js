import "./navbar.css";
import {useState} from "react";
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