import React from "react"

import Logo from "../assets/Logo.png"

export default function Initial({ setRecall, setGoal }) {
    
    let quantZaps = 0;
    const [message, setMessage] = React.useState("");


    const getValue = (event) => {
        quantZaps = event.target.value;
        console.log(quantZaps);
    }

    function enableRecall(quant) {
        if (quant > 0) {
            setRecall(true);
            setGoal(quant);
        }
        setMessage("A meta deve ser maior que 0!");
    }

    return (
        <div className="initial">
            <img src={Logo} alt="Logo" />
            <h1>ZapRecall</h1>
            <p>{message}</p>
            <input type="number" placeholder="Digite sua meta de zaps..." onChange={getValue} />
            <button onClick={() => enableRecall(quantZaps)} >Iniciar Recall!</button>
        </div>
    )
}