import React from "react"

import Logo from "../assets/Logo.png"

export default function Initial({ deck, setRecall, setGoal, setDeck }) {
    
    const [quantZaps, setQuantsZaps] = React.useState(0);
    const [message, setMessage] = React.useState("");
    const [colorSelect, setColorSelect] = React.useState("#ADADAD");
    const [colorInput, setColorInput] = React.useState("#ADADAD");
    const questions = [
        [
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
        ],
        [
            {
                question: "O que é Arqueação Bruta?",
                answer: "Medida do volume total dos espaços fechados do navio."
            },
            {
                question: "O que é Arqueação Liquida?",
                answer: "Medida do volume util para carga de um navio."
            },
            {
                question: "No lançamento longitudinal de uma embarcação quando ocorre o instante critico?",
                answer: "Quando o somatório dos momentos em FP é nulo."
            },
            {
                question: "No lançamento longitudinal de uma embarcação quando é que ela deixa a rampa?",
                answer: "Quando a força de empuxo é igual a força peso."
            },
            {
                question: "Quais são os métodos para análise de estabilidade em avarias?",
                answer: "Método da perda de empuxo e Método do incremento de peso."
            }
        ]
    ];

    function getValue(event) {
        setQuantsZaps (event.target.value);
        setColorInput("#FB6B6B");
    }

    function enableRecall(quant) {
        const bool = Number(quant) > 0 && Number(quant) <= deck.length;
        if (bool) {
            setRecall(true);
            setGoal(quant);
        }
        setMessage(deck.length === 0 ? "Escolha um deck!" : `A meta deve ser entre 0 e ${deck.length}` );
        setColorInput("#ADADAD");
    }

    function chooseDeck(e) {
        setDeck(questions[Number(e.target.value)]);
        setColorSelect("#FB6B6B");
    }

    return (
        <div className="initial">
            <img src={Logo} alt="Logo" />
            <h1>ZapRecall</h1>
            <select style={{color: colorSelect}}onChange={(e) => chooseDeck(e)}>
                <option hidden select="true" >Escolha um deck</option>
                <option value="0" >React</option>
                <option value="1" >Arquitetura Naval</option>
            </select>
            <p>{message}</p>
            <input style={{color: colorInput}} type="number" placeholder="Digite sua meta de zaps..." onChange={(e)=> getValue(e)} />
            <button onClick={() => enableRecall(quantZaps)} >Iniciar Recall!</button>
        </div>
    )
}