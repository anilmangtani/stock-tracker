import React from "react";
import Image1 from "../../src/images/img1.jpg"; // Ensure the correct path
import Image2 from "../../src/images/img2.jpg"; // Ensure the correct path
import Image3 from "../../src/images/img3.jpg"; // Ensure the correct path
import "../pages/Team.css";

const Team = () => {
    return (
        <div className="TeamContainer">
            <h1>Meet Our Team</h1>
            <p>We Are The Best Team</p>
            <div className="teamMembers">
                <div className="member">
                    <img src={Image3} alt="Team Member 1" />
                    <h3>Anil Mangtani</h3>
                    <p>CEO</p>
                </div> 
                <div className="member">
                    <img src={Image2} alt="Team Member 2" />
                    <h3>Jane Smith</h3>
                    <p>CTO</p>
                </div>
                <div className="member">
                    <img src={Image3} alt="Team Member 3" />
                    <h3>Anil Mangtani</h3>
                    <p>Co-Founder</p>
                </div>
            </div>
        </div>
    );
};

export default Team;
