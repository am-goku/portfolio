import React from 'react'

import "@/styles/SkillCard.css"
import Image from 'next/image';

type skill = {
    icn: any;
    name: String;
}

const SkillCard = ({icn, name}:skill) => {
  return (
    <>
      <div className="skillCard select-none">
        <Image src={icn} alt='' className='bulgeBox w-52 h-full' />
      </div>
    </>
  );
}

export default SkillCard