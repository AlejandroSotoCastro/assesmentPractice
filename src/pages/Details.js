import { useState, useEffect } from "react";
import axios from "axios";

import Patient from "../components/Patient";

function compare_name(player_a, player_b) {
  return player_a.lastName.localeCompare(player_b.lastName);
}

export default function Details() {
  const [doctorStatus, setDoctorStatus] = useState("all");
  const [doctorData, set_doctorData] = useState();
  const [patientData, set_patientData] = useState();

  function filter_patients() {
    if (doctorStatus !== "all") {
      return [...patientData].filter(
        (patient) => patient.doctorId === parseInt(doctorStatus)
      );
    } else return [...patientData];
  }

  useEffect(() => {
    async function fetchPatients() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`
      );

      set_patientData(response.data);
    }

    async function fetchDoctors() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      );

      set_doctorData(response.data);
    }
    fetchPatients();
    fetchDoctors();
  }, []);

  if (!doctorData || !patientData) {
    return <div>Loading</div>;
  } else {
    const patients_filtered = filter_patients();

    const patients_sorted = [...patients_filtered].sort(compare_name);

    return (
      <div>
        <select onChange={(event) => setDoctorStatus(event.target.value)}>
          <option value="all">All</option>

          {doctorData.map((doctor) => {
            return (
              <option key={doctor.id} value={doctor.id}>
                {doctor.doctor}
              </option>
            );
          })}
        </select>
        {patients_sorted.map((patient) => {
          return (
            <Patient
              key={patient.id}
              id={patient.id}
              firstName={patient.firstName}
              lastName={patient.lastName}
              dateOfBirth={patient.dateOfBirth}
            />
          );
        })}
      </div>
    );
  }
}
