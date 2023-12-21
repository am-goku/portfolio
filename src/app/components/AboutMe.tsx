import React from 'react'

const AboutMe = () => {
  return (
    <>
      <div className=" flex flex-col justify-center gap-20 select-none">
        <span className="text-3xl lg:text-7xl font-medium font-sans lg:block hidden">
          Hello! I&apos;m Gokul, <br />
          Full Stack Devloper.
        </span>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col font-mono gap-10">
            <div>
              <span className="font-bold">
                👋 Hello World, I&#39;m Gokul Krishna!
              </span>{" "}
              <br />
              I&#39;m a self-taught software developer who thrives on challenges
              and loves bringing ideas to life through code. My expertise lies
              in crafting web applications using technologies like React, Redux,
              Node.js, Express, and MongoDB.
            </div>
            <div>
              <span className="font-bold">🚀 Self-Taught Journey:</span>
              <br />
              No formal degrees in my arsenal – just a relentless curiosity and
              a knack for problem-solving. I believe in continuous learning, and
              every line of code I write is a testament to my dedication to
              mastering the craft.
            </div>
            <div>
              <span className="font-bold">🌐 Embracing Challenges:</span> <br />
              I see challenges as opportunities for growth. Whether it&#39;s
              diving into a new technology or solving a tricky bug, I approach
              each task with enthusiasm and a commitment to delivering
              high-quality solutions. <br />
              <br />
              In a nutshell, I&#39;m a tech enthusiast who takes pride in
              writing clean, efficient code and enjoys the process of turning
              ideas into reality. Let&#39;s connect and explore the
              possibilities of the digital world together!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe