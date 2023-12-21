import Image from 'next/image';
import React from 'react'


type skill = {
    icn:any;
    name:String;
}

const SkillIcn = ({icn}:skill) => {
  return (
      <Image src={icn} alt="" className='Image bulgeBox' draggable={false} />
  );
}

export default SkillIcn