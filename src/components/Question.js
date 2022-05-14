import React from "react"

import Play from "../assets/play.png"
import Check from "../assets/check.png"
import Mark from "../assets/mark.png"
import Wrong from "../assets/X.png"
import Setinha from "../assets/setinha.png"


function NotAnswered({ i, state, setState }) {

    const mode = state ? "flex" : "none";
    const [display, setDisplay] = React.useState(mode);

    function hide() {
        setDisplay("none");
        setState(!state);
    }

    return (
        <div style={{display: display}} onClick={hide} className="question-Number">
            <h2>Pergunta {i+1}</h2>
            <img src={Play} alt="Play" />
        </div>
    )
}

function Answered({ i, type } ) {

    return (
        <div className="question-Number">
            <del>Pergunta {i+1}</del>
            <img src={type} alt="Resultado" />
        </div>
    )
}

function Quest({ question, state, setTentar }) {

    const mode = state ? "none" : "flex";

    function toAnswer() {
        setTentar(true);
    }

    return (
        <div style={{display: mode}} className="quest">
            <p>{question}</p>
            <div className="container">
                <img onClick={toAnswer} src={Setinha} alt="Responder" />
            </div>
        </div>
    )
}

function Ans({ answer }) {

    const cor = ["#FF3030", "#FF922E", "#2FBE34"]

    return (
        <div className="quest">
            <p>{answer}</p>
            <div className="container">
                <div style={{background: cor[0]}} className="option">
                    <p>Não lembrei</p>
                </div>
                <div style={{background: cor[1]}}  className="option">
                    <p>Quase não lembrei</p>
                </div>
                <div style={{background: cor[2]}}  className="option">
                    <p>Zap!</p>
                </div>
            </div>
            
        </div>
    )
}

export default function Question({question, answer, index}) {

    const [status, setStatus] = React.useState(false);
    const [tentar, setTentar] = React.useState(false);
    const [state, setState] = React.useState(true);

    const type = {Check}

    return (
        <li key={index+1}>
            {!status ? <NotAnswered i={index} state={state} setState={setState} /> : <Answered i={index} type={type} />}
            {!tentar ? <Quest question={question} state={state} setTentar={setTentar} /> : <Ans answer={answer}  setState={setState} setstatus={setStatus} setTentar={setTentar} />}
        </li>

    )
}