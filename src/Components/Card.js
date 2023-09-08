import React from "react";
import "./Card.css";

function Card({ heading, tags, video }) {
    return (
        <>
            <div className="card">
                <video src={video} controls muted />

                <div className="text-container">
                    <h4>{heading}</h4>

                    <p className="tag-container">
                        {tags.map((tagText, idx) => (
                            <Tag key={idx} tagText={tagText} />
                        ))}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Card;

function Tag({ tagText }) {
    return <div className="tag">{tagText}</div>;
}
