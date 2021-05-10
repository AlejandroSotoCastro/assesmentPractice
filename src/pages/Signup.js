import React from "react";
import { useState } from "react";

export default function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setsEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setsBirth] = useState("");
  const [state, setsState] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = { fname, lname, email, phone, gender, birth };

    //   console.log("submitting the form");
    //   if (!form) {
    //     alert("please provide a form");
    //     return;
    //   }
    //   if (form.length <= 1) {
    //     alert("form has to be longer");
    //     return;
    //   }
    console.log(form);
    setsState(true);
    setFname("");
    setLname("");
    setsEmail("");
    setGender("");
    setPhone("");
    setsBirth("");
  };
  return (
    <div>
      <h1>Patient signup</h1>
      {state && <p>Thanks for submiting!</p>}
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            First Name{" "}
            <input
              value={fname}
              onChange={(event) => setFname(event.target.value)}
            />{" "}
          </p>
          <p>
            Last Name{" "}
            <input
              value={lname}
              onChange={(event) => setLname(event.target.value)}
            />{" "}
          </p>
          <p>
            email{" "}
            <input
              value={email}
              onChange={(event) => setsEmail(event.target.value)}
            />{" "}
          </p>
          <p>
            Phone{" "}
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />{" "}
          </p>
          <p>
            gender{" "}
            <select onChange={(event) => setGender(event.target.value)}>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </p>
          <p>
            date of birth{" "}
            <input
              type="date"
              value={birth}
              onChange={(event) => setsBirth(event.target.value)}
            />{" "}
          </p>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
