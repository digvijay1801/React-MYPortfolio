import React from "react";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Digvijay</h2>
        <div className="prompt">
          <p>Welcome to my corner of the web ! a passionate and creative frontend web developer dedicated to crafting user-centric, visually appealing, and highly functional websites. With a keen eye for design and a knack for turning ideas into reality, I bring dreams to life in the digital world.I believe in the power of design to enhance user experiences, My design philosophy revolves around simplicity, functionality, and a touch of elegance.
          </p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <span>

              HTML, CSS, JavaScript, React, React Router, Three.Js, Redux, Next Js, Bootstrap, Version Control, ES6, NPM, Git/Github, Communication, VS Code, Style Component, Font Awesome
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
