import AboutMe from "./components/AboutMe";
import ProfileCard from "./components/ProfileCard";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import "@/styles/ShadowBox.css";


export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-32">
        <main className="flex flex-col md:flex-row lg:gap-10 gap-20 px-6 justify-center">
          {/* Profile Area */}
          <div className="md:h-[70vh] lg:w-1/4 flex flex-col items-center p-1 pt-3 px-8 lg:px-20 gap-5 custom-box">
            <ProfileCard />
          </div>

          {/* bio */}
          <div className="h- w-fit flex flex-col items-center pt-3 px-8 lg:px-20 gap-5 p-1 custom-box">
            <AboutMe />
          </div>
        </main>
        <div
          id="projects"
          className="w-full flex flex-col justify-center items-center h-screen pt-20 custom-box"
        >
          <span className="font-bold text-6xl font-mono mt-10 select-none">PROJECTS</span>
          <Projects />
        </div>

        <div
          id="skills"
          className="w-full flex flex-col items-center gap-20 h-screen pt-20"
        >
          <span className="font-bold text-6xl font-mono select-none">SKILLS</span>
          <Skills />
        </div>

        <div
          id="contact"
          className="w-full flex flex-col items-center h-screen pt-20"
        >
          <span className="font-bold text-4xl font-mono select-none">CONTACT</span>
          <Contact />
        </div>
      </div>
    </>
  );
}
