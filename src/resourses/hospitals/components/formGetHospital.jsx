import React from "react";
import { useState } from "react";
import ApiRoutes from "../../core/api/apiRoutes";

export default function FormGetHospital() {
    const [hospitalId, setHospitalId] = useState("")

    const Get = () => {
        fetch(`${ApiRoutes.hospital}/${hospitalId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Hospital no encontrado");
            }
            return response.json();
        })
        .then(data => {
            alert(data.hospital.id + ", " + data.hospital.name + ", " + data.hospital.address + ", " + data.hospital.number)
        })
        .catch(error => {
            console.log("Error: " + error);
        });
    }

    return <div className="w-[25%] h-[40%] flex flex-col items-center text-xs shadow-md rounded-md p-5">
        <p className="text-blue-600 text-sm font-medium">Consultar hospital</p>

        <div className="h-12">
            <p>Id:</p>
            <input type="text"  onChange={(data) => setHospitalId(data.target.value)} placeholder="id del hospital" className="border-2 border-blue-500 rounded-sm"></input>
        </div>

        <button onClick={Get} className="w-32 rounded-sm bg-blue-600 text-white">Aceptar</button>
    </div>
}