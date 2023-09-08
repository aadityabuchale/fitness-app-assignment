import React, { useContext } from "react";
import "./Header.css";
import { AppContext } from "../App";

function Header() {
    const { inputWord, setInputWord, setCardCount } = useContext(AppContext);

    function handleWordChange(e) {
        setInputWord(e.target.value);
    }

    function handleOptionChange(e) {
        setCardCount(e.target.value);
    }

    const options = Array.from({ length: 8 }, (num, index) => (index + 2) * 5);

    return (
        <>
            <header className="header">
                <div className="logo">
                    <h2>SocialBoat</h2>
                </div>
                <div className="searchbox">
                    <input
                        type="text"
                        placeholder="search here"
                        value={inputWord}
                        onChange={(e) => handleWordChange(e)}
                    />

                    <div className="cardcount-dropdown">
                        <select
                            name="select-count"
                            onChange={(e) => handleOptionChange(e)}
                        >
                            {options.map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="profile">
                    <img src="./profile-icon.png" height="35px" alt="" />
                </div>
            </header>
        </>
    );
}
export default Header;
