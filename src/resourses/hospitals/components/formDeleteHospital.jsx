import React from "react";
import { useState } from "react";
import ApiRoutes from "../../core/api/apiRoutes";

export default function FormDeleteHospital(props) {
    const [id, setId] = useState("");

    const Delete = () => {
        fetch(`${ApiRoutes.hospital}/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            setId("");
            props.event();
        })
        .catch(error => console.log("Error:", error));
    };


    return <div className="w-[25%] h-[40%] flex flex-col items-center text-xs shadow-md rounded-md p-5">
        <p className="text-blue-600 text-sm font-medium">Eliminar hospital</p>

        <div className="h-12">
            <p>Id:</p>
            <input type="text" onChange={data => setId(data.target.value)} placeholder="id del hospital" className="border-2 border-blue-500 rounded-sm"></input>
        </div>

        <button onClick={Delete} className="w-32 rounded-sm bg-blue-600 text-white">Aceptar</button>
    </div>
}