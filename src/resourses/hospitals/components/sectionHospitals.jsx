import { useEffect } from "react";
import React from "react";

export default function SectionHospitals(props) {
    useEffect(() => {
        console.log(props.hospitals);
    })

    return <div className="w-[93%] h-[90%] p-5 rounded-md shadow-md flex flex-col">
        <div className="w-full mb-2">
            <p className="text-blue-600 text-sm font-medium">Todos los servicios</p>
        </div>
        <div className="flex flex-col w-full">
            <div className="h-5 w-full border flex items-center bg-blue-50">
                <div className="w-1/4 h-full flex justify-center items-center border">
                    <p className="text-xs">Id Hospital</p>
                </div>
                <div className="w-1/4 h-full flex justify-center items-center border">
                    <p className="text-xs">Nombre</p>
                </div>
                <div className="w-1/4 h-full flex justify-center items-center border">
                    <p className="text-xs">Dirección</p>
                </div>
                <div className="w-1/4 h-full flex justify-center items-center border">
                    <p className="text-xs">Número</p>
                </div>
            </div>

            {props.hospitals.map((item) => (
                <div key={item.id} className="h-5 w-full border flex items-center">
                    <div className="w-1/4 h-full flex justify-center items-center border">
                        <p className="text-xs">{item.id}</p>
                    </div>
                    <div className="w-1/4 h-full flex justify-center items-center border">
                        <p className="text-xs">{item.name}</p>
                    </div>
                    <div className="w-1/4 h-full flex justify-center items-center border">
                        <p className="text-xs">{item.address}</p>
                    </div>
                    <div className="w-1/4 h-full flex justify-center items-center border">
                        <p className="text-xs">{item.number}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}