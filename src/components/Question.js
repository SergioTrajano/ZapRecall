import React from "react"

import Play from "../assets/play.png"

import QuestNumber from "./QuestNumber"
import Quest from "./Quest"

export default function Question({ question, answer, index, cont, quant, results, setCont, setResults, setDisplay, setMargi }) {

    const [side, setSide] = React.useState(false);
    const [type, setType] = React.useState(Play);
    const [state, setState] = React.useState(false);
    const [color, setColor] = React.useState("#000000");


    return (
        <li>
            {!state ? <QuestNumber state={state} setState={setState} side={side} i={index} type={type} color={color} /> : <Quest state={state} setState={setState} setType={setType} question={question} answer={answer} side={side} quant={quant} setSide={setSide} setColor={setColor} setCont={setCont} setResults={setResults} cont={cont} results={results} setDisplay={setDisplay} setMargi={setMargi} />}
        </li>
    )
}