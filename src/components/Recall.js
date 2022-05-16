import React from "react";
import Logo from "../assets/logo-pequeno.png"
import Party from "../assets/party.png"
import Sad from "../assets/sad.png"

import Question from "./Question"

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default function Recall ({ goal, deck, setRecall }) {

    const [cont, setCont] = React.useState(0);
    const [results, setResults] = React.useState([]);
    const [display, setDisplay] = React.useState("none");
    const [margi, setMargi] = React.useState("90px");

    shuffle(deck);

    return (
        <>
            <div style={{marginBottom: margi }} className="recall">
                <div className="banner">
                    <img src={Logo} alt="Logo" />
                    <h1>ZapRecall</h1>
                </div>

                <ul>

                    {deck.map((q, i) => <Question key={i} question={q.question}  answer={q.answer} index={i} cont={cont} results={results} quant={deck.length} setCont={setCont} setResults={setResults} setDisplay={setDisplay} setMargi={setMargi} />)}

                </ul>
            </div>
            <div className="bottom">
                <div style={{display: display}} className="end">
                    <div>
                        <img src={cont >= goal ? Party : Sad } alt="Emote" />
                        <p>
                            {cont >= goal ? "Parabéns" : "Putz..."}
                        </p>
                    </div>
                    <div>
                        <p>
                            {cont >= goal ? "Você atingiu sua meta de Zaps!" : "Você não atingiu sua meta de Zaps!" }
                        </p>
                    </div>
                </div>
                <div className="progress">
                    <p>
                        {results.length}/{deck.length} CONCLUÍDOS
                    </p>
                    <div>
                        {results.map((t, i) => <img key={i} src={t} alt="" />)}
                    </div>
                </div>
                <div style={{display: display}} onClick={() => setRecall(false)}>
                    REINICIAR RECALL
                </div>
            </div>
        </>
        
    )
}