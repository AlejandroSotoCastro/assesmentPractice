import React from "react";
import { Link } from "react-router-dom";

export default function Patient({ id, firstName, lastName, dateOfBirth }) {
  return (
    <div className="Patient">
      <p>
        NAME: {firstName} {lastName}{" "}
      </p>
      <p>ID: {id}</p>
      <p>DATE OF BIRTH:{dateOfBirth}</p>

      <Link to={"/details/" + id}>
        <button>Show Details</button>{" "}
      </Link>
    </div>
  );
}
