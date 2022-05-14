import React from "react"

import "../css/reset.css"
import "../css/style.css"

import Initial from "./Initial"
import Recall from "./Recall"

export default function App() {

    const [recall, setRecall] = React.useState(false);

    return (
        <>
            {!recall ? <Initial setRecall={setRecall} /> : <Recall setRecall={setRecall} />}
        </>
    );
}