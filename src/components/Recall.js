import React from "react";
import Logo from "../assets/logo-pequeno.png"
import Party from "../assets/party.png"
import Sad from "../assets/sad.png"

import Question from "./Question"

export default function Recall () {

    const questions = [
        {
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript"
        },
        {
            question: "O React é ___",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            question: "Componentes devem iniciar com ___",
            answer: "letra maiúscula"
        },
        {
            question: "Podemos colocar ___ dentro do JSX.",
            answer: "expressões"
        },
        {
            question: "O ReactDOM nos ajuda ___.",
            answer: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            question: "Usamos o npm para ___.",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            question: "Usamos props para ___.",
            answer: "passar diferentes informações para componentes"
        },
        {
            question: "Usamos estado (state) para ___.",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ];

    const [cont, setCont] = React.useState(0);
    const [results, setResults] = React.useState([]);
    const [display, setDisplay] = React.useState("none");

    return (
        <>
            <div className="recall">
                <div className="banner">
                    <img src={Logo} alt="Logo" />
                    <h1>ZapRecall</h1>
                </div>

                <ul>

                    {questions.map((q, i) => <Question question={q.question}  answer={q.answer} index={i} cont={cont} results={results} quant={questions.length} setCont={setCont} setResults={setResults} setDisplay={setDisplay} />)}

                </ul>
            </div>
            <div className="bottom">
                <div style={{display: display}} className="end">
                    <div>
                        <img src={cont === questions.length ? Party : Sad } alt="Emote" />
                        <p>
                            {cont === questions.length ? "Parabéns" : "Putz..."}
                        </p>
                    </div>
                    <div>
                        <p>
                            {cont === questions.length ? "Você não esqueceu de nenhum flashcard!" : "Ainda faltam alguns... Mas não desanime!" }
                        </p>
                    </div>
                </div>
                <div className="progress">
                    <p>
                        {results.length}/{questions.length} CONCLUÍDOS
                    </p>
                    <div>
                        {results.map(t => <img src={t} alt="" />)}
                    </div>
                </div>
            </div>
        </>
        
    )
}