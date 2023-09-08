import React, { useContext } from "react";
import { AppContext } from "../App";
import "./ShowSearchResult.css";

function ShowResult() {
    const { inputWord } = useContext(AppContext);

    return (
        <div className="search-result">
            <span>Searching results for -</span>
            <b>{inputWord}</b>
        </div>
    );
}

export default ShowResult;
