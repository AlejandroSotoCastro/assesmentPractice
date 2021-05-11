import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PatientDetails() {
  const route_parameters = useParams();
  const [fetechedData, set_fetechedData] = useState();
  const [patientData, set_patientData] = useState();

  function findPatient() {
    const patient = [...fetechedData].find((patient) => {
      console.log(patient.id === route_parameters.patientId);
      return patient.id === route_parameters.patientId;
    });

    console.log("this is the patient", patient);

    set_patientData(patient);

    //clean buffer
    set_fetechedData("");
  }

  useEffect(() => {
    async function fetchPatients() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`
      );

      set_fetechedData(response.data);
    }

    fetchPatients();
  }, []);

  if (fetechedData) {
    findPatient();
    console.log(patientData);

    return (
      <div>
        <h1>{(patientData.firstName, patientData.lastName)}</h1>
      </div>
    );
  } else {
    return <div>Loading!</div>;
  }
}
