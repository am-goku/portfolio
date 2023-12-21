import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function ToggleBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToProjects = (id: string): void => {
    setIsMenuOpen(false)
    const tgbl = document.getElementById("tglbtn");
    const projectsSection = document.getElementById(id); // Assuming you have an element with id="projects"
    
    tgbl?.click()
    if (projectsSection) {
        const a = document.createElement("a");
        a.href = `/#${id}`;
        a.click()
    }
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#212121] select-none">
      <NavbarContent className="bg-[#212121]">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          id="tglbtn"
          className="sm:hidden bulgeBox w-10 aspect-square"
        />
      </NavbarContent>

      <NavbarMenu className="bg-[#212121] p-10 font-mono font-semibold custom-box">
        <NavbarMenuItem className="bg-[#212121] flex flex-col gap-5">
          <div className="bulgeBox" onClick={() => scrollToProjects("home")}>
            <span>Home</span>
          </div>
          <div className="bulgeBox" onClick={() => scrollToProjects("projects")}>
            <span>Projects</span>
          </div>
          <div className="bulgeBox" onClick={() => scrollToProjects("skills")}>
            <span>Skills</span>
          </div>
          <div className="bulgeBox" onClick={() => scrollToProjects("contact")}>
            <span>Contact</span>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
