import React, { useState } from "react";
import { AiFillDislike } from "react-icons/ai";

function EventoD() {
    const [exibirMens, setExibirMens] = useState(0);
    function contadord(){
        setExibirMens(exibirMens+1)
    }

    return (
        <div className="botao">
            <button onClick={contadord}> <AiFillDislike/></button>
            <p>{exibirMens}</p>
        </div>
    );
}

export default EventoD;
