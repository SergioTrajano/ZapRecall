import React from "react"

import "../css/reset.css"
import "../css/style.css"

import Initial from "./Initial"
import Recall from "./Recall"

export default function App() {

    const [display, setDisplay] = React.useState(false);
    return (

        <>
            {!display ? <Initial setDisplay={setDisplay} /> : <Recall />}
        </>  

    )
}