import "./clothesItem.css";
import {FaStar, FaArrowRight} from "react-icons/fa";
import {AiOutlineCheckCircle} from "react-icons/ai"
import {useState} from "react";
import Modal from 'react-modal';

export default function ClothesItem({name, type, img}) {
    const [level, setLevel] = useState(null);
    const [hover, setHover] = useState(null);
    const [isChecked, toggleIsChecked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleCheckCircle = () => {
        toggleIsChecked(!isChecked)
    }

    return (<div className={"clothesItem"}>
        <h2>{name}</h2>
        <div className="container">
            <div className="image">
                <img src={img} alt="image" className="img-clothes"/>
            </div>
            <div>
                {[...Array(4)].map((star, index) => {
                    const currentLevel = index + 1;
                    return (<label>
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
                    </label>)
                })}
            </div>
            <div className="check-circle">
                <AiOutlineCheckCircle className="check-circle"
                                      size={50}
                                      value={isChecked}
                                      onClick={handleCheckCircle}
                                      color={isChecked ? "D4CE46" : "#D9D9D9"}
                />
            </div>
            <div>
                <FaArrowRight className="arrow-right" size={50}
                              onClick={openModal}
                />
                    <Modal className="modal" isOpen={isModalOpen} onClose={closeModal}>
                        <h2> {name} </h2>
                        <p> {type} </p>
                        <button onClick={closeModal}> Close</button>
                    </Modal>
            </div>
        </div>
    </div>)
}