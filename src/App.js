import React, { useState, createContext, useEffect } from "react";

import "./App.css";
import CardContainer from "./Components/CardContainer";
import Header from "./Components/Header";
import ShowSearchResult from "./Components/ShowSearchResult";
import Hero from "./Components/Hero";
import axios from "axios";

const AppContext = createContext();

function App() {
    const [cardData, setCardData] = useState([]);
    const [inputWord, setInputWord] = useState("");
    const [cardCount, setCardCount] = useState(10);

    useEffect(() => {
        axios
            .get(
                `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${inputWord}&numResults=${cardCount}`
            )
            .then((response) => setCardData(response.data.results))

            .catch((error) => console.log("Error fetching data", error));
    }, [inputWord, cardCount]);

    return (
        <AppContext.Provider
            value={{
                cardData,
                setCardData,
                inputWord,
                setInputWord,
                cardCount,
                setCardCount,
            }}
        >
            <div className="App">
                <Header />
                {inputWord === "" ? (
                    <Hero />
                ) : (
                    <>
                        <ShowSearchResult />
                        <CardContainer />
                    </>
                )}
            </div>
        </AppContext.Provider>
    );
}

export { AppContext };
export default App;
