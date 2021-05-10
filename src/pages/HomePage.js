import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to AMS Gps</h1>
      <p>We are: ¿?</p>
      <p>To make an appointment</p>
      <p>call: 020 555 5555</p>
      <div className="Home-Buttons">
        <div>
          <Link to="/onDuty">
            <button>Who is on duty?</button>
          </Link>
        </div>
        <div>
          <Link to="/signup">
            <button>I am a new Patient</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
