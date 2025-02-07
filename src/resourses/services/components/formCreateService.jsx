import React from "react";
import ApiRoutes from "../../core/api/apiRoutes";
import { useState } from "react";

export default function FormCreateService(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [hospitalId, setHospitalId] = useState("");

    const Post = () => {
        fetch(ApiRoutes.service, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, description, hospital_id: parseInt(hospitalId) })
        })
        .then(response => response.json())
        .then(() => {
            setName("");
            setDescription("");
            setHospitalId("");
            props.event();
        })
        .catch(error => console.log("Error:", error));
    };

    return <div className="w-[65%] h-[40%] flex flex-wrap justify-center items-center text-xs shadow-md rounded-md p-5">
        <div className="w-full h-5 text-sm font-medium text-blue-600 ">
            <p>Crear un nuevo servicio</p>
        </div>
        
        <div className="w-full flex justify-start ">
            <div className="w-32 h-12 mr-5 ">
                <p>Nombre:</p>
                <input type="text" onChange={data => setName(data.target.value)} placeholder="nombre del servicio" className="border-2 border-blue-500 rounded-sm"></input>
            </div>
            
            <div className="w-32 h-12 mr-5 ">
                <p>Descripción:</p>
                <input type="text" onChange={data => setDescription(data.target.value)} placeholder="nueva descripción" className="border-2 border-blue-500 rounded-sm"></input>
            </div>
            
            <div className="w-32 h-12 mr-5 ">
                <p>Asignar hospital:</p>
                <input type="text" onChange={data => setHospitalId(data.target.value)} placeholder="id del hospital" className="border-2 border-blue-500 rounded-sm"></input>
            </div>
        </div>

        <button onClick={Post} className="w-32 rounded-sm bg-blue-600 text-white">Aceptar</button>
    </div>        
}