import React, { useState, useEffect } from "react";
import FormCreateHospital from "../components/formCreateHospital";
import FormDeleteHospital from "../components/formDeleteHospital";
import FormEditHospital from "../components/formEditHospital";
import SectionHospitals from "../components/sectionHospitals";
import FormGetHospital from "../components/formGetHospital";

import HeaderComponent from "../../core/components/header";
import DashboardComponent from "../../core/components/dashboard";
import FooterComponent from "../../core/components/footer";

import ApiRoutes from "../../core/api/apiRoutes"

export default function HospitalCRUD() {
    const [hospitals, setHospitals] = useState([]);

    const fetchHospitals = () => {
        fetch(ApiRoutes.hospital)
        .then(data => {
            return data.json()
        })
        .then(data => {
            setHospitals(data.hospitals);
        })
        .catch(error => {
            console.log("Error: " + error);
        })
    };

    useEffect(() => {
        fetchHospitals();
    }, []);


    
    return <div className="w-full h-screen flex flex-col">
        <HeaderComponent></HeaderComponent>
        
        <div className="w-full flex-1 flex flex-row">

            <DashboardComponent></DashboardComponent>

            <div className="w-[100%] h-full flex flex-col">
                <div className="w-full h-[calc(50%)] flex flex-wrap justify-evenly items-center">
                    <FormCreateHospital event={fetchHospitals}></FormCreateHospital>
                    <FormDeleteHospital event={fetchHospitals}></FormDeleteHospital>
                    <FormEditHospital event={fetchHospitals}></FormEditHospital>
                    <FormGetHospital></FormGetHospital>
                </div>

                <div className="w-full h-[calc(50%)] flex flex-wrap justify-around items-center">
                    <SectionHospitals hospitals={hospitals}></SectionHospitals>
                </div>
    
                <FooterComponent></FooterComponent>
            </div>

        </div>
    
    </div>

} 