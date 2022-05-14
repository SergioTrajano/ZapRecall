import Logo from "../assets/Logo.png"

export default function Initial({ setRecall }) {
    return (
        <div className="initial">
            <img src={Logo} alt="Logo" />
            <h1>ZapRecall</h1>
            <button onClick={() => setRecall(true)}>Iniciar Recall!</button>
        </div>
    )
}