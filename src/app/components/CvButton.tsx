"use client";

import React from 'react'
import "@/styles/CvBtn.css"
import { downloadPdf } from '@/service/fileSaver';

import pdf from "@/assets/files/Gokul Krishna G H.pdf"

const CvButton = () => {

    const handleCV = () => {
      const pdfFilePath = pdf; // Adjust the path accordingly
      downloadPdf(pdfFilePath, "Gokul Krishna G H");
    }

  return (
    <>
      <div
        onClick={handleCV}
        className="h-10 flex select-none justify-center items-center px-10 rounded-xl mt-3 lg:mt-7 cursor-pointer bulgeBox"
      >
        <span className="font-medium font-mono text-lg md:text-base lg:text-lg">
          Download CV
        </span>
      </div>
    </>
  );
}

export default CvButton