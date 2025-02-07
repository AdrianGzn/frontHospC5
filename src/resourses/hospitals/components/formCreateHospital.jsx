import React from "react";
import { useState } from "react";
import ApiRoutes from "../../core/api/apiRoutes";

export default function FormCreateHospital(props) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");

    const Post = () => {
        fetch(ApiRoutes.hospital, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, address, number: parseInt(number) })
        })
        .then(response => response.json())
        .then(() => {
            setName("");
            setAddress("");
            setNumber("");
            props.event();
        })
        .catch(error => console.log("Error:", error));
    };



    return <div className="w-[65%] h-[40%] flex flex-wrap justify-center items-center text-xs shadow-md rounded-md p-5">
        <div className="w-full h-5 text-sm font-medium text-blue-600 ">
            <p>Registrar un nuevo hospital</p>
        </div>
        
        <div className="w-full flex justify-start ">
            <div className="w-32 h-12 mr-5 ">
                <p>Nombre:</p>
                <input type="text" onChange={data => setName(data.target.value)} placeholder="nombre del hospital" className="border-2 border-blue-500 rounded-sm"></input>
            </div>
            
            <div className="w-32 h-12 mr-5 ">
                <p>Dirección:</p>
                <input type="text" onChange={data => setAddress(data.target.value)} placeholder="dirección del hospital" className="border-2 border-blue-500 rounded-sm"></input>
            </div>
            
            <div className="w-32 h-12 mr-5 ">
                <p>Numero:</p>
                <input type="text" onChange={data => setNumber(data.target.value)} placeholder="numero del hospital" className="border-2 border-blue-500 rounded-sm"></input>
            </div>
        </div>

        <button onClick={Post} className="w-32 rounded-sm bg-blue-600 text-white">Aceptar</button>
    </div>        
}