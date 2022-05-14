import Check from "../assets/check.png"
import Mark from "../assets/mark.png"
import Wrong from "../assets/X.png"
import Setinha from "../assets/setinha.png"

export default function Quest({ state, question, answer, side, color, cont, results, quant, setState, setType, setSide, setColor, setCont, setResults, setDisplay, setMargi }) {

    function toAnswer() {
        setSide(!side);
    }

    function finishQuestion(type, color) {
        setType(type);
        setState(!state);
        setColor(color);
        setResults([...results, type]);
        if (type === Check) setCont(cont + 1);
        if (results.length === quant - 1) {
            setDisplay("flex");
            setMargi("220px")
        }
    }

    if (!side) {
        return (
            <div className="quest">
                <p>{question}</p>
                <div className="container">
                    <img onClick={toAnswer} src={Setinha} alt="Responder" />
                </div>
            </div>
        );
    } else {
        return (
            <div className="quest">
                <p>{answer}</p>
                <div className="container">
                    <div onClick={() => finishQuestion(Check, color[2])} style={{ background: color[2] }} className="option">
                        <p>Zap!</p>
                    </div>
                    <div onClick={() => finishQuestion(Mark, color[1])}  style={{ background: color[1] }} className="option">
                        <p>Quase não lembrei</p>
                    </div>
                    <div onClick={() => finishQuestion(Wrong, color[0])}  style={{ background: color[0] }} className="option">
                        <p>Não lembrei</p>
                    </div>
                </div>
            </div>
        );
    }
}