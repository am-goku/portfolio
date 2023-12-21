"use client"
import Link from 'next/link';
import React from 'react'

import "@/styles/Header.css"
import ToggleBar from '../components/ToggleBar';

const Header = () => {

  const scrollToProjects = (id:string):void => {
    const projectsSection = document.getElementById(id); // Assuming you have an element with id="projects"

    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop,
        behavior: "smooth",
      });
    }
  };


  return (
    <>
      <div className="w-full h-24 flex justify-center items-center">
        <ul className="md:flex hidden md:gap-20 font-medium">
          <Link href={"/"} className="bulgeBoxNav px-5 p-2">
            Home
          </Link>
          <Link
            onClick={() => scrollToProjects("projects")}
            href={""}
            className="bulgeBoxNav px-5 p-2"
          >
            Projects
          </Link>
          <Link
            onClick={() => scrollToProjects("skills")}
            href={""}
            className="bulgeBoxNav px-5 p-2"
          >
            Skills
          </Link>
          <Link
            onClick={() => scrollToProjects("contact")}
            href={""}
            className="bulgeBoxNav px-5 p-2"
          >
            Contact
          </Link>
        </ul>

        {/* small screen*/}
        <ul className="flex md:hidden font-medium w-screen p-4">
          <ToggleBar />
        </ul>
      </div>
    </>
  );
}

export default Header