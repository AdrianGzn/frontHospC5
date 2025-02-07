import React, { useState, useEffect } from "react";
import FormCreateService from "../components/formCreateService";
import FormDeleteService from "../components/formDeleteService";
import FormEditService from "../components/formEditService";
import FormGetService from "../components/formGetService";
import SectionServices from "../components/SerctionServices";

import HeaderComponent from "../../core/components/header";
import DashboardComponent from "../../core/components/dashboard";
import FooterComponent from "../../core/components/footer";

import ApiRoutes from "../../core/api/apiRoutes"

export default function ServiceCRUD() {
    const [services, setServices] = useState([]);

    const fetchServices = () => {
        fetch(ApiRoutes.service)
        .then(data => {
            return data.json()
        })
        .then(data => {
            setServices(data.services);
        })
        .catch(error => {
            console.log("Error: " + error);
            
        })
    }

    useEffect(() => {
        fetchServices();
    }, []);

    return <div className="w-full h-screen flex flex-col">

        <HeaderComponent></HeaderComponent>

        <div className="w-full flex-1 flex flex-row">
    
            <DashboardComponent></DashboardComponent>
    
            <div className="w-[100%] h-full flex flex-col">
                <div className="w-full h-[calc(50%)] flex flex-wrap justify-evenly items-center">
                    <FormCreateService event={fetchServices}></FormCreateService>
                    <FormDeleteService event={fetchServices}></FormDeleteService>
                    <FormEditService event={fetchServices}></FormEditService>
                    <FormGetService></FormGetService>
                </div>
    
                <div className="w-full h-[calc(50%)] flex flex-wrap justify-around items-center">
                    <SectionServices services={services}></SectionServices>
                </div>
        
                <FooterComponent></FooterComponent>
            </div>
    
        </div>
        
    </div>

}