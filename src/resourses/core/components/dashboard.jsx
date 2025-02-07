import React from "react";
import { Link } from "react-router-dom";

export default function DashboardComponent() {
    return <>
        <div className="w-[240px] h-full bg-zinc-100 flex flex-col items-center">
            <Link to="/hospitales" className="w-[90%]">
                <div className="w-full h-12 bg-zinc-100 mt-10 flex items-center justify-center rounded-md shadow-md" >
                    Hospitales
                </div>
            </Link>

            <Link to="/servicios" className="w-[90%]">
                <div className="w-full h-12 bg-zinc-100 mt-5 flex items-center justify-center rounded-md shadow-md" >
                    Servicios
                </div>
            </Link>         
            
        </div>
    </>
}