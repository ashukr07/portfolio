import { Link } from "react-router";
import { navLinks, resumeLink } from "../data/constant";
import { useState } from "react";
import { MenuIcon, CircleX } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-neutral bg-opacity-50 shadow-md">
      <div className="navbar">
        <div className="navbar-start">
          <a
            href="#home"
            className="flex items-center gap-2"
            onClick={() => setActive("")}
          >
            <img src="/logo.png" className="w-10 h-10 object-contain" />
            <p className="text-[18px] text-white font-bold cursor-pointer flex ">
              Ashutosh&nbsp;
              <span className="sm:block hidden">Kumar Roy</span>
            </p>
          </a>
        </div>

        <div className="navbar-end flex flex-row items-center pr-3 gap-6 md:flex justify-end">
          <ThemeToggle />
          <Link to={resumeLink} target="_blank">
            <button className="btn btn-primary">Resume</button>
          </Link>

          <ul className="list-none hidden md:flex flex-row gap-10">
            {navLinks.map(({ id, name }) => (
              <li
                key={id}
                onClick={() => setActive(id)}
                className={`cursor-pointer ${
                  active === id ? "text-primary" : "text-white"
                }`}
              >
                <a href={`#${id}`}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile navbar */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <div
            className="w-[28px] h-[28px] object-contain"
            onClick={() => {
              console.log(toggle);
              setToggle(!toggle);
            }}
          >
            {toggle ? <CircleX /> : <MenuIcon />}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-neutral absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map(({ id, name }) => (
                <li
                  key={id}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(id);
                  }}
                  className={`cursor-pointer ${
                    active === id ? "text-primary" : "text-white"
                  }`}
                >
                  <a href={`#${id}`}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
