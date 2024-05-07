import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        style={{ top: "14px", left: "0px" }}
        className="w-full  absolute z-50 opacity-100 text-white flex justify-center items-center "
      >
        <div className=" flex items-center container justify-between px-4">
          <div style={{ gap: "10px" }} className="flex items-center  ">
            <div>
              <span
                className={
                  " text-sm font-bold leading-relaxed !text-white inline-block mr-4  whitespace-nowrap uppercase"
                }
                href="https://kristian.kovac.ch"
              >
                Template | Dein Titel
              </span>
            </div>
            <div className="hidden md:flex items-center justify-center w-full ">
              <a
                className={" text-xs flex items-center uppercase font-bold"}
                href="https://kristian.kovac.ch"
              >
                <i className={"far fa-file-alt text-lg leading-lg mr-2"} />{" "}
                Benutzerhandbuch
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <ul style={{ gap: "1.5rem" }} className="flex w-full">
              <li className="flex items-center justify-center w-full text-white">
                <a
                  className={" text-xs flex items-center uppercase font-bold"}
                  href="https://kristian.kovac.ch"
                >
                  <i className={" fab fa-github text-lg leading-lg"} />
                </a>
              </li>
              <li className="flex items-center justify-center w-full text-white">
                <button
                  className="bg-white flex items-center  text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none "
                  type="button"
                  style={{ transition: "all .15s ease", gap: "5px" }}
                >
                  <i className="fas fa-arrow-alt-circle-down"></i>{" "}
                  <span>Download</span>
                </button>
              </li>
            </ul>
          </div>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden text-white"
          >
            <IoMenu size={26} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -650 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -650 }}
            transition={{ duration: 0.5 }}
            className="border-radius fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-white p-4 md:hidden"
          >
            <ul style={{ gap: "1.5rem" }} className="flex w-full flex-col">
              <li className="flex items-center justify-center w-full text-gray-800">
                <a
                  className={" text-xs uppercase font-bold"}
                  href="https://kristian.kovac.ch"
                >
                  <i className={"far fa-file-alt text-lg leading-lg mr-2"} />{" "}
                  Benutzerhandbuch
                </a>
              </li>
              <li className="flex items-center justify-center w-full text-gray-800">
                <a
                  className={" text-xs uppercase font-bold"}
                  href="https://kristian.kovac.ch"
                >
                  <i className={" fab fa-github text-lg leading-lg "} />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>
              <li className="flex items-center justify-center w-full text-gray-800">
                <button
                  className={
                    " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none"
                  }
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li>
            </ul>
            <div
              style={{ top: "1.5rem", right: "1.5rem" }}
              className="fixed "
              onClick={() => setShowMenu(false)}
            >
              <IoMdClose size={23} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
