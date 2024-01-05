"use client";
import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='navbar bg-base-100'>
    <div className='flex-1'><a className='btn btn-ghost text-xl'>Abdelrahman</a></div>
    <div className="flex-none hidden lg:block">
      <ul className="menu menu-horizontal px-1">
        <li onClick={() => scrollToSection("home")}><a>Home</a></li>
        <li onClick={() => scrollToSection("testimonials")}><a>Testimonials</a></li>
        <li onClick={() => scrollToSection("about")}><a>About</a></li>
        <li onClick={() => scrollToSection("skills")}><a>Skills</a></li>
        <li onClick={() => scrollToSection("projects")}><a>Projects</a></li>
        
      </ul>
    </div>
  </div>
  );
};

export default Navbar;
