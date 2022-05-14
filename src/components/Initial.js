import React from "react"

import Logo from "../assets/Logo.png"

export default function Initial({ setRecall, setGoal }) {

    let quantZaps = 0;
    const [placeHolder, setPlaceHolder] = React.useState("Digite sua meta de zaps...");


    const getValue = (event) => {
        quantZaps = event.target.value;
        setGoal(quantZaps);
    }

    return (
        <div className="initial">
            <img src={Logo} alt="Logo" />
            <h1>ZapRecall</h1>
            <input type="number" placeholder={placeHolder} onChange={getValue}></input>
            <button onClick={() => quantZaps > 0 ? setRecall(true) : setPlaceHolder("Digite um número maior que 0!")} >Iniciar Recall!</button>
        </div>
    )
}