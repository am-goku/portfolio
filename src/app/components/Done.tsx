import React from 'react'

import { IoCheckmarkDoneCircle } from "react-icons/io5";

import "@/styles/Done.css"


const Done = () => {
  return (
    <div className="flex select-none w-fit justify-center items-center">
      <span className="font-mono font-semibold">Thank You !</span>
      <div className="loader "></div>
    </div>
  );
}

export default Done