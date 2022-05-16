import React from "react"

import "../css/reset.css"
import "../css/style.css"

import Initial from "./Initial"
import Recall from "./Recall"

export default function App() {

    const [recall, setRecall] = React.useState(false);
    const [goal, setGoal] = React.useState(0);
    const [deck, setDeck] = React.useState([]);

    return (
        <>
            {!recall ? <Initial deck={deck} setDeck={setDeck} setRecall={setRecall} setGoal={setGoal} /> : <Recall deck={deck} setRecall={setRecall} goal={goal}/>}
        </>
    );
}