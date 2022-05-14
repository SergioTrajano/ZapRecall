export default function QuestNumber({ state, i, side, type, color, setState }) {

    function hide() {
        setState(!state);
    }

    if (!side) {
        return (
            <div onClick={hide} className="question-Number">
                <h2>Pergunta {i + 1}</h2>
                <img src={type} alt="Play" />
            </div>
        );
    } else {
        return (
            <div className="question-Number">
                <del style={{color: color }}>Pergunta {i + 1}</del>
                <img src={type} alt="Resultado" />
            </div>
        );
    }
}