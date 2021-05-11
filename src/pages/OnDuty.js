import React from "react";
import "./OnDuty.css";
import ContactInfo from "../components/ContactInfo";

import { useState, useEffect } from "react";

import axios from "axios";

export default function OnDuty() {
  const [doctorData, set_doctorData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      );

      set_doctorData(response.data);
    }
    fetchData();
  }, []);
  console.log(doctorData);

  if (!doctorData) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <h1>Who is on Duty ?</h1>

        <table className="Table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {doctorData.map((doctor) => {
              return (
                <tr key={doctor.id}>
                  <td>{doctor.doctor}</td>
                  <td>{doctor.onDuty ? "Avaliable" : "Not Avaliable"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ContactInfo />
      </div>
    );
  }
}
