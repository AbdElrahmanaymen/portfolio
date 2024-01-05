import React from "react";
import Image from "next/image";
import AppStoreButton from "../../buttons/app_store_btn";
import PlayStoreButton from "../../buttons/play_store_btn";
import { ProjectDetailsProps } from "../../../types/types"

const ProjectDetailsComponent: React.FC<ProjectDetailsProps> = ({
  appName,
  appPhoto,
  appDescription,
  appTags,
  appStoreLink,
  playStoreLink,
  previewVideo,
  isReverseOrder
}) => {
  return (
    <div className={`flex flex-col w-full h-screen lg:flex-row py-20 ${isReverseOrder ? 'lg:flex-row-reverse' : ''}`}>
      <div className="grid flex-grow place-items-center">
        <Image
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          src={appPhoto}
          className="object-contain w-1/2"
        />
      </div>
      <div className="grid flex-grow place-items-center">
        <article className="prose">
          <h1>{appName}</h1>
          {appTags.map((value, index) => (
            <div className="badge badge-primary mr-1" key={index}>
              {value}
            </div>
          ))}
          <p>{appDescription}</p>
          <div className="flex gap-5 items-center">
            {appStoreLink.length > 0 ? <AppStoreButton link={appStoreLink} /> : null} 
            {playStoreLink.length > 0 ? <PlayStoreButton link={playStoreLink} /> : null}
            {previewVideo.length > 0 ? <button className="btn btn-outline">Watch Video</button> : null}       
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProjectDetailsComponent;
