"use client";

import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="flex flex-col-reverse w-full h-screen justify-center lg:flex-row sm:flex-col-reverse md:flex-col-reverse xl:flex-row px-14">
      <div className="grid flex-grow place-items-center">
        <article className="prose lg:prose-xl dark:prose-invert">
          <h3>Hey, I’m Abdelrahman 👋</h3>
          <h1>Computer Engineer</h1>
          <p>
            Explore my world of robotics and programming innovation, where
            passion drives impactful solutions.
          </p>
          <div className="flex items-center">
            <button
              className="btn btn-outline"
              onClick={() => {
                window.open(
                  "mailto:abdelrahmanaymen@outlook.com",
                  "_blank"
                );
              }}
            >
              Get in Touch
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/10fMsUvlkUpNEfHM2n2sAbWeo8SHX7zws/view?usp=sharing",
                  "_blank"
                );
              }}
              className="btn ml-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
              Download CV
            </button>
          </div>
        </article>
      </div>
      <div className="grid flex-grow place-items-center">
        <div className="avatar">
          <div className="h-1/2 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
            <Image
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              src="/me.webp"
              className="relative object-top w-fit h-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
