import React from "react";

function About() {
  return (
    <>
      <div className="container w-75 h-50 p-3 bg-dark text-white rounded-4">
        <h3 className="text-center p-3">Well-Come To my WebApp</h3>
        <dv className="container fs-4">
          <p>My Name is Vaidik...</p>
          <div className="d-flex flex-column align-items-center">
            <p>By Profession I'm Coder</p>
            <p>I'm Working in Various feild</p>
            <p>Such as MERN Stack, Android, IoS and AI/ML</p>
          </div>
          <p className="fs-5 text-end">Contact me : vaidpatel11@gmail.com</p>
        </dv>
      </div>
    </>
  );
}

export default About;
