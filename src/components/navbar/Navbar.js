import "./navbar.css";
import {useState} from "react";
import search from './search_FILL0_wght400_GRAD0_opsz24.png';


export default function Navbar() {
    let [searchInput, setSeachInput] = useState("");
    const [searchBarActive, setSearchBarActive] = useState(false)

    const handleChange = (e) => {
        e.preventDefault();
        setSeachInput(e.target.value)
        console.log(searchInput)
        showSearchBarIcon()
    };

    function showSearchBarIcon() {
        if (searchInput != "") {
            setSearchBarActive(true)
        } else if (searchInput === "") {
            setSearchBarActive(false)
        }
    }

    function showIcon() {
        if (searchBarActive === true) {
            return (
                <img className={"searchImg"} src={search}/>
            )
        }
    }

    return (
        <>
            <nav>
                <h1>Zelda</h1>
                <div className={"searchbar"}>
                    <input className={"searchbar-text"}
                           type={"text"}
                           label={"search"}
                           placeholder={"Search"}
                           onChange={handleChange}
                           value={searchInput}
                    />
                    {showIcon()}
                </div>
            </nav>

        </>
    )
}
