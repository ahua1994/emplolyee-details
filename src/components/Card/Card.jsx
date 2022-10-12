import "./Card.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
    faArrowCircleLeft,
    faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function Card(props) {
    const [index, setIndex] = useState(0);
    let { image, name, age, email, id } = props.data[index];
    return (
        <>
            <h3 className="Index">Employee Details - {index + 1}</h3>
            <div className="Card" key={id}>
                <img src={image} alt={name} />
                <h1>{name}</h1>
                <h4>{email}</h4>
                <h5>{age} years old</h5>
                <div className="socials">
                    <FontAwesomeIcon className="fb" icon={faFacebook} />
                    <FontAwesomeIcon className="tw" icon={faTwitter} />
                    <FontAwesomeIcon className="ig" icon={faInstagram} />
                </div>
            </div>
            <div className="buttons">
                <button
                    onClick={() => {
                        setIndex(
                            index <= 0 ? props.data.length - 1 : index - 1
                        );
                    }}
                >
                    <FontAwesomeIcon
                        className="left"
                        icon={faArrowCircleLeft}
                    />
                </button>
                <button
                    onClick={() => {
                        setIndex(
                            index >= props.data.length - 1 ? 0 : index + 1
                        );
                    }}
                >
                    <FontAwesomeIcon
                        className="right"
                        icon={faArrowCircleRight}
                    />
                </button>
            </div>
        </>
    );
}

export default Card;
