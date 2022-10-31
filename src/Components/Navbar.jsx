import React from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Fragment } from "react";
import "./Navbar.css";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <div className="flex flex-row justify-between items-center p-4 text-[#272727] Navbar">
        <div className="flex flex-row justify-start items-center space-x-2 cursor-pointer Logo">
          <div className="flex flex-row justify-start items-center space-x-2 cursor-pointer">
            <div>
              <img
                src="./assets/logo.png"
                className="h-[64px] w-[64px] NavbarLogo"
                alt=""
              />
            </div>
            <div className="flex flex-col uppercase justify-start items-start font-semibold text-xl tracking-wide -space-y-2.5 NavbarTitle ">
              <div>DR SPM IIIT</div>
              <div>NAYA RAIPUR</div>
            </div>
          </div>
          <div className="Hamburger">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        <div
          className={
            "flex flex-row justify-center items-center space-x-8 NavbarDisplay NavbarAbout "
          }
        >
          <a
            href="#About"
            className="font-medium text-lg cursor-pointer Adjust"
          >
            About
          </a>
          <a href="#themes" className="font-medium text-lg cursor-pointer">
            Themes
          </a>
          {/* <div className="font-medium text-lg cursor-pointer">Schedule</div> */}
          <a href="#participate" className="font-medium text-lg cursor-pointer">
            How to participate
          </a>
          <a href="#contact" className="font-medium text-lg cursor-pointer">
            Contact
          </a>
        </div>

        <a
          href="https://forms.gle/JciXa11ezVZwDtrj8"
          target="_blank"
          className="text-[#5172E7] w-[180px] h-[48px] rounded-full border drop-shadow-lg flex justify-center items-center bg-white font-semibold text-opacity-80 cursor-pointer hover:drop-shadow-xl transition duration-100 NavbarSubmit NavbarDisplay"
          rel="noreferrer"
        >
          Submit Your Idea
        </a>
        {isOpen ? (
          <div
            className={
              !isOpen
                ? ""
                : "NAV_ABOUT flex flex-row justify-center items-center NavbarDisplay "
            }
            // data-aos="fade-down"
          >
            <a
              href="#About"
              className="font-medium text-lg cursor-pointer AboutFix"
            >
              About
            </a>
            <a href="#themes" className="font-medium text-lg cursor-pointer ">
              Themes
            </a>
            {/* <div className="font-medium text-lg cursor-pointer">Schedule</div> */}
            <a
              href="#participate"
              className="font-medium text-lg cursor-pointer"
            >
              How to participate
            </a>
            <a
              href="#contact"
              smooth="true"
              duration="1000"
              className="font-medium text-lg cursor-pointer"
            >
              Contact
            </a>
            <a
              href="https://forms.gle/JciXa11ezVZwDtrj8"
              target="_blank"
              className="text-[#5172E7] p-3 rounded-full border drop-shadow-lg  bg-white font-semibold text-opacity-80 cursor-pointer hover:drop-shadow-xl transition duration-100 SubmitIdea"
              rel="noreferrer"
            >
              Submit Your Idea
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};
