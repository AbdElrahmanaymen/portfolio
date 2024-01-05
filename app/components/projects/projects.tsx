"use client";
import React from "react";
import ProjectDetailsComponent from "./project_details/project_details";
import { projects } from "@/app/data/projects";

const Projects = () => {
  return (
    <div className="px-14">
      <div className="prose">
        <h1>Featured Projects.</h1>
      </div>
      {projects.map((value, index) => (
        <ProjectDetailsComponent
          key={index}
          appName={value.appName}
          appDescription={value.appDescription}
          appPhoto={value.appPhoto}
          appTags={value.appTags}
          appStoreLink={value.appStoreLink}
          playStoreLink={value.playStoreLink}
          previewVideo={value.previewVideo}
          isReverseOrder={value.isReverseOrder}
        />
      ))}
    </div>
  );
};

export default Projects;
