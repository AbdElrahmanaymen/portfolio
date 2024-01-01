import React from "react";

const Skills = () => {
  return (
    <div className="h-screen flex flex-col justify-center px-14">
      <div className="prose">
        <h1>Skills.</h1>
      </div>
      <div className="flex lg:flex-row py-10">
        <div className="grid flex-grow">
          <div className="prose">
            <h2>Programming</h2>
            <h4>C</h4>
            <h4>C++</h4>
            <h4>Python</h4>
            <h4>Arduino</h4>
            <h4>Dart</h4>
            <h4>Javascript</h4>
          </div>
        </div>
        <div className="grid flex-grow">
          <div className="prose">
            <h2>Frameworks</h2>
            <h4>Flutter</h4>
            <h4>React.Js</h4>
            <h4>Express.Js</h4>
            <h4>Next.Js</h4>
          </div>
        </div>

        <div className="grid flex-grow">
          <div className="prose">
            <h2>Tools</h2>
            <h4>MATLAB</h4>
            <h4>Intel Quartus</h4>
            <h4>Pycharm</h4>
            <h4>Visual Studio</h4>
            <h4>Visual Studio Code</h4>
            <h4>Arduino IDE</h4>
            <h4>STM32CubeIDE</h4>
            <h4>STM32CubeProgrammer</h4>
            <h4>Solidworks</h4>
          </div>
        </div>
        <div className="grid flex-grow">
          <div className="prose">
            <h2>Soft</h2>
            <h4>Effective Communication</h4>
            <h4>Collaboration</h4>
            <h4>Commitment</h4>
            <h4>Leadership</h4>
            <h4>Problem Solving</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
