import "./clothesItem.css";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai"
import {useState} from "react";

export default function ClothesItem() {
    const [level, setLevel] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className={"clothesItem"}>
            <h2>Naam van het product</h2>
            <div className="container">
            <div className="image">
                {/*img */}
            </div>
            <div>
                {[...Array(5)].map((star, index) => {
                    const currentLevel = index + 1;
                    return (
                        <label>
                            <input
                                type={"radio"}
                                name={"level"}
                                value={currentLevel}
                                onClick={() => setLevel(currentLevel)}
                            />
                            <FaStar
                                className={"star"}
                                size={50}
                                color={currentLevel <= (hover || level) ? "D4CE46" : "#D9D9D9"}
                                onMouseEnter={() => setHover(currentLevel)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    )
                })}
            </div>
            <div>
                <AiOutlineCheckCircle className="check-circle" size={50}/>
            </div>
            <div>
                <FaArrowRight className="arrow-right" size={50} />
                {/*Pijl*/}
            </div>
            </div>
        </div>
    )
}