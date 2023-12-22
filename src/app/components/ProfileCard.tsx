import React from 'react'
import {
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import profileImage from "@/assets/Gokul Krishna G H.jpg"
import Image from 'next/image';
import CvButton from './CvButton';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

const ProfileCard = () => {
  return (
    <>
      <div className="text-white text-2xl lg:text-3xl font-mono font-semibold">
        GOKUL KRISHNA G H
      </div>

      {/* profile pic section  */}
      <div className="w-full flex justify-center items-center rounded-lg bg-">
        <Image
          src={profileImage}
          alt="Profile Image"
          className="rounded-lg w-full bulgeBox2"
          draggable={false}
        />
      </div>

      {/* email */}
      <div className="font-mono font-medium">
        <span>gokulkrishnagh@gmail.com</span>
      </div>

      {/* Stack */}
      <div className="font-mono font-semibold text-2xl text-center">
        <span>MERN Stack Developer</span>
      </div>

      {/* Social */}
      <div className="flex gap-10 items-center justify-center select-none">
        <Link
          href={"http://linkedin.com/in/am-goku"}
          target="_blank"
          draggable={false}
        >
          {" "}
          <FontAwesomeIcon icon={faLinkedin} className="w-8" />{" "}
        </Link>
        <Link
          href={"http://instagram.com/am_._spector"}
          target="_blank"
          draggable={false}
        >
          {" "}
          <FontAwesomeIcon icon={faInstagram} className="w-8" />{" "}
        </Link>
        <Link
          href={"https://github.com/am-goku"}
          target="_blank"
          draggable={false}
        >
          {" "}
          <FontAwesomeIcon icon={faGithub} className="w-8" />{" "}
        </Link>
      </div>

      <div className="flex gap-10 items-center justify-center px-10 select-none">
        <CvButton />
      </div>
    </>
  );
}

export default ProfileCard