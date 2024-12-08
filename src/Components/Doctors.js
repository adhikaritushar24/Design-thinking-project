import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Design thinking project.
          Trust in their knowledge and experience to lead you towards a
          healthier and happier life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Saumya joshi"
          title="General Surgeons"
          stars="4.5"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Sooraj Rana "
          title="Dentist"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Mukhyanshi"
          title="Cardiologist"
          stars="3.9"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Uday singh"
          title="Psychiatrist"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;
