import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="px-14">
      <div className="prose">
        <h1>Projects.</h1>
      </div>
      <div className="flex flex-col w-full h-full lg:flex-row py-10">
        <div className="grid flex-grow place-items-center">
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            src="/rentop/rentop.png"
            className="object-contain w-fit"
          />
        </div>
        <div className="grid flex-grow place-items-center">
          <article className="prose">
            <h1>Rentop App</h1>
            <div className="badge badge-primary mr-1">Flutter</div>
            <div className="badge badge-primary mr-1">MySQL</div>
            <div className="badge badge-primary mr-1">Javascript</div>
            <div className="badge badge-primary mr-1">Express.Js</div>
            <div className="badge badge-primary">Mobile App</div>
            <p>
              Rentop is a car rental platform. We have carefully selected the
              best professionals for you. Our partners are subject to thorough
              checks and stringent conditions to offer you an unforgettable
              experience. No more category rentals with Rentop. You rent what
              you see and without surprises!
            </p>
            <div className="flex gap-5 items-center">
              <button
                type="button"
                className="flex items-center justify-center w-48 text-white bg-black h-14 rounded-xl"
              >
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width="30">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="-mt-1 font-sans text-xl font-semibold">
                    App Store
                  </div>
                </div>
              </button>
              <button className="btn btn-outline">Watch Video</button>
            </div>
          </article>
        </div>
      </div>
      <div className="flex flex-col w-full h-full lg:flex-row py-10">
        <div className="grid flex-grow place-items-center">
          <article className="prose">
            <h1>AraFoca App</h1>
            <div className="badge badge-primary mr-1">Flutter</div>
            <div className="badge badge-primary">Mobile App</div>
            <p>
              The AraFoca Pomodoro app aims to enhance productivity with
              customizable focus times and notifications accompanied by
              vibrations at the completion of each Pomodoro session.
            </p>
            <div className="flex gap-5 items-center">
              <button
                type="button"
                className="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14"
              >
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    ></path>
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="-mt-1 font-sans text-xl font-semibold">
                    Google Play
                  </div>
                </div>
              </button>
              <button className="btn btn-outline">Watch Video</button>
            </div>
          </article>
        </div>
        <div className="grid flex-grow place-items-center">
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            src="/arafoca/arafoca.png"
            className="object-contain w-1/2"
          />
        </div>
      </div>
      <div className="flex flex-col w-full h-full lg:flex-row py-10">
        <div className="grid flex-grow place-items-center">
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            src="/bjoern/bjoern.png"
            className="object-cover w-1/2"
          />
        </div>
        <div className="grid flex-grow place-items-center">
          <article className="prose">
            <h1>Bjoern macht&#39;s</h1>
            <div className="badge badge-primary mr-1">Flutter</div>
            <div className="badge badge-primary">Mobile App</div>
            <p>
              The app allows users to track time, sign sessions with their
              signature, and automatically capture and save screenshots at the
              session&#39;s start and end. Additionally, it creates a text log,
              offering a comprehensive record of each session&#39;s details.
            </p>
            <div className="flex gap-5 items-center">
              <button className="btn btn-outline">Watch Video</button>
            </div>
          </article>
        </div>
      </div>
      <div className="flex flex-col w-full h-full lg:flex-row py-10">
        <div className="grid flex-grow place-items-center">
          <article className="prose">
            <h1>Azan5 App</h1>
            <div className="badge badge-primary mr-1">Flutter</div>
            <div className="badge badge-primary">Mobile App</div>
            <p>
              The Azan5 App stands as an all-encompassing tool for Muslims,
              providing accurate prayer times, customizable notifications,
              multilingual support, and the ability to personalize the app&#39;s
              theme to cater to individual preferences.
            </p>
            
          </article>
        </div>
        <div className="grid flex-grow place-items-center">
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            src="/azan5/azan5.png"
            className="object-cover w-fit"
          />
        </div>
      </div>
      <div className="flex flex-col w-full h-full lg:flex-row py-10">
        <div className="grid flex-grow place-items-center">
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            src="/nazrah/nazrah.png"
            className="object-contain w-fit"
          />
        </div>
        <div className="grid flex-grow place-items-center">
          <article className="prose">
            <h1>Nazrah App</h1>
            <div className="badge badge-primary mr-1">Flutter</div>
            <div className="badge badge-primary mr-1">Firebase</div>
            <div className="badge badge-primary">Mobile App</div>
            <p>
              Nazrah App is an online marketplace in Saudi Arabia, serving as a
              platform for individuals to buy and sell a wide range of products.
              The app caters to a diverse array of categories, including
              electronics, fashion, furniture, and more.
            </p>
          </article>
        </div>
      </div>
      <div className="flex flex-col w-full h-full lg:flex-row py-10">
        <div className="grid flex-grow place-items-center">
          <article className="prose">
            <h1>Nazrah App V2</h1>
            <div className="badge badge-primary mr-1">Flutter</div>
            <div className="badge badge-primary mr-1">Firebase</div>
            <div className="badge badge-primary">Mobile App</div>
            <p>
              Nazrah App is an online marketplace in Saudi Arabia, serving as a
              platform for individuals to buy and sell a wide range of products.
              The app caters to a diverse array of categories, including
              electronics, fashion, furniture, and more.
            </p>
          </article>
        </div>
        <div className="grid flex-grow place-items-center">
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            src="/nazrah/nazrah_v2.png"
            className="object-contain w-fit"
          />
        </div>
      </div>
      <div className="flex flex-col w-full h-full lg:flex-row py-10">
        <div className="grid flex-grow place-items-center">
          <article className="prose">
            <h1>Nazrah Website</h1>
            <div className="badge badge-primary mr-1">Flutter</div>
            <div className="badge badge-primary mr-1">Firebase</div>
            <div className="badge badge-primary">Website</div>
            <p>
              Nazrah Website is an online marketplace in Saudi Arabia, serving
              as a platform for individuals to buy and sell a wide range of
              products. The website caters to a diverse array of categories,
              including electronics, fashion, furniture, and more.
            </p>
            <div className="flex gap-5 items-center">
              <button className="btn btn-outline">Watch Video</button>
            </div>
          </article>
        </div>
        <div className="grid flex-grow place-items-center">
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            src="/nazrah/nazrah_web.png"
            className="object-contain w-fit"
          />
        </div>
      </div>
      <div className="flex flex-col w-full h-full lg:flex-row py-10">
        <div className="grid flex-grow place-items-center">
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            src="/dar_sharaf/dar_sharaf.png"
            className="object-contain w-fit"
          />
        </div>
        <div className="grid flex-grow place-items-center">
          <article className="prose">
            <h1>Dar Sharaf Website</h1>
            <div className="badge badge-primary mr-1">Flutter</div>
            <div className="badge badge-primary mr-1">Firebase</div>
            <div className="badge badge-primary">Website</div>
            <p>
              Dar Sharaf Website is an landing website for a coffee importers in
              GCC countries.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Projects;
