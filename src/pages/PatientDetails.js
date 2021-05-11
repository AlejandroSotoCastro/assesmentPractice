import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PatientDetails() {
  const route_parameters = useParams();

  const [patientData, set_patientData] = useState();

  useEffect(() => {
    async function fetchPatients() {
      const response = await axios.get(
        `http://localhost:4000/patients/${route_parameters.patientId}`
      );

      set_patientData(response.data);
    }

    fetchPatients();
  }, []);

  if (patientData) {
    // findPatient();
    console.log("patient data ", patientData);

    return (
      <div>
        <div className="Border">
          <h1>
            {patientData.firstName} {patientData.lastName}
          </h1>
          <p>Date of birth {patientData.dateOfBirth}</p>
          <p>Gender {patientData.gender}</p>
        </div>

        <div className="Border">
          <p>Contact details</p>
          <ul>
            <li>email: {patientData.email}</li>
            <li>phoneNumber: {patientData.phoneNumber}</li>
          </ul>
        </div>

        <div className="Border">
          <p>prescriptions</p>
          <ul>
            {patientData.prescriptions.map((prescription) => (
              <li>{prescription}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return <div>Loading!</div>;
  }
}
