import React from "react";

export default function FormDeleteService(props) {
    return <div className="w-[25%] h-[40%] flex flex-col items-center text-xs shadow-md rounded-md p-5">
        <p className="text-blue-600 text-sm font-medium">Eliminar servicio</p>

        <div className="h-12">
            <p>Id:</p>
            <input type="text" placeholder="id del servicio" className="border-2 border-blue-500 rounded-sm"></input>
        </div>

        <button onClick={props.onClick} className="w-32 rounded-sm bg-blue-600 text-white">Aceptar</button>
    </div>
}