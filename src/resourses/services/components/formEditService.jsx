import React from "react";
import ApiRoutes from "../../core/api/apiRoutes";
import { useState } from "react";

export default function FormEditService(props) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [hospitalID, setHospitalID] = useState("");


    const Put = () => {
        fetch(`${ApiRoutes.service}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, description, hospital_id: parseInt(hospitalID) })
        })
        .then(response => response.json())
        .then(() => {
            setId("");
            setName("");
            setDescription("");
            setHospitalID("");
            props.event();
        })
        .catch(error => console.log("Error:", error));
    };


    return <div className="w-[65%] h-[40%] flex flex-wrap justify-center items-center text-xs shadow-md rounded-md p-5">
        <div className="w-full h-5 text-sm font-medium text-blue-600 ">
            <p>Editar un servicio existente</p>
        </div>
        
        <div className="w-full flex justify-start ">
            <div className="w-32 h-12 mr-5 ">
                <p>Id:</p>
                <input type="text" onChange={data => setId(data.target.value)} placeholder="id del servicio existente" className="border-2 border-blue-500 rounded-sm"></input>
            </div>

            <div className="w-32 h-12 mr-5 ">
                <p>Nombre:</p>
                <input type="text" onChange={data => setName(data.target.value)} placeholder="nombre del servicio" className="border-2 border-blue-500 rounded-sm"></input>
            </div>
            
            <div className="w-32 h-12 mr-5 ">
                <p>Descripción:</p>
                <input type="text" onChange={data => setDescription(data.target.value)} placeholder="nueva descripción servicio" className="border-2 border-blue-500 rounded-sm"></input>
            </div>
            
            <div className="w-32 h-12 mr-5 ">
                <p>Hospital:</p>
                <input type="text" onChange={data => setHospitalID(data.target.value)} placeholder="id del hospital" className="border-2 border-blue-500 rounded-sm"></input>
            </div>
        </div>

        <button onClick={Put} className="w-32 rounded-sm bg-blue-600 text-white">Aceptar</button>
    </div>        
}