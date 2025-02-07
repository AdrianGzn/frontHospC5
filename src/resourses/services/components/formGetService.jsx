import React from "react";
import ApiRoutes from "../../core/api/apiRoutes";
import { useState } from "react";

export default function FormGetService(props) {
    const [serviceId, setServiceId] = useState("")

    const Get = () => {
        fetch(`${ApiRoutes.service}/${serviceId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Servicio no encontrado");
            }
            return response.json();
        })
        .then(data => {
            alert(data.service.id + ", " + data.service.name + ", " + data.service.description + ", " + data.service.hospital_id)
        })
        .catch(error => {
            console.log("Error: " + error);
        });
    }


    return <div className="w-[25%] h-[40%] flex flex-col items-center text-xs shadow-md rounded-md p-5">
        <p className="text-blue-600 text-sm font-medium">Consultar servicio</p>

        <div className="h-12">
            <p>Id:</p>
            <input type="text" onChange={data => setServiceId(data.target.value)} placeholder="id del servicio" className="border-2 border-blue-500 rounded-sm"></input>
        </div>

        <button onClick={Get} className="w-32 rounded-sm bg-blue-600 text-white">Aceptar</button>
    </div>
}