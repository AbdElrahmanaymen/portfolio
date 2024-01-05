import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-14">
      <div className="prose">
        <h1>About me.</h1>
      </div>
      <div className="flex flex-col w-full lg:flex-row md:flex-col py-10">
        <div className="grid flex-grow place-items-center">
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            src="/me-2.png"
            className="object-contain w-full"
          />
        </div>
        <div className="grid flex-grow place-items-center">
          <div className="prose">
            <p className="mb-3 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:me-3 first-letter:float-start">
              My journey into the world of robotics and programming began in
              2014, fueled by a passion that led me to overcome challenges
              through self-learning. I actively engaged with the IEEE
              Organization, excelling in their Robotics Engineering track and
              winning first place in a competition. Joining the Mate ROV
              Competition and the Robo-tech team further fueled my success,
              securing top rankings in international competitions. Committed to
              continuous learning, I pursued courses at esteemed institutions,
              including MITx and Harvard. Amid the global pandemic in 2020, I
              developed an innovative medical app to contribute to my community.
              Currently pursuing a Bachelor&#39;s degree in Computer Engineering
              at the University of Technology Malaysia, I am also recognized as
              a Level One Seller on Fiverr since 2019, specializing in Flutter
              development. This journey reflects my dedication to growth,
              academic excellence, and impactful contributions to both the
              technological and humanitarian aspects of my field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
