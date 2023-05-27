import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";


function Evento() {
    const [exibirMen, setExibirMen] = useState(0);
    function contador(){
        setExibirMen(exibirMen+1)
    }
    return (
        <div className="botao">
            <button onClick={contador}> <AiFillLike/></button>
            <p>{exibirMen  }</p>
        </div>
    );
}


export default Evento;