import React, { useContext } from "react";
import { AppContext } from "../App"; // Assuming AppContext is imported correctly
import "./CardContainer.css";
import Card from "./Card";

function CardContainer() {
    const { cardData } = useContext(AppContext);

    return (
        <div className="card-container">
            {cardData.map((card, idx) => {
                return (
                    <Card
                        key={idx}
                        heading={card.heading}
                        tags={card.tags}
                        video={card.video}
                    />
                );
            })}
        </div>
    );
}

export default CardContainer;
