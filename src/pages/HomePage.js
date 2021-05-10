import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import ContactInfo from "../components/ContactInfo";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to AMS Gps</h1>

      <ContactInfo />
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
