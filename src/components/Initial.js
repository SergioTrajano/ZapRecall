import Logo from "../assets/Logo.png"

export default function Initial({ setDisplay }) {
    return (
        <div className="initial">
            <img src={Logo} alt="Logo" />
            <h1>ZapRecall</h1>
            <button onClick={() => setDisplay(true)}>Iniciar Recall!</button>
        </div>
    )
}