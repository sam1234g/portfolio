"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import MenuItems from "./Menu_Items";
import Image from "next/image";
//import ThemeSwitcher from "@/app/ThemeSwitcher";

export default function Dropdown({pages}) {
  const [dropdown, setDropdown] = useState(false);
  const menuRef = useRef();
  const dropdownRef = useRef();

  // const view = dropdown ? "block" : "hidden";

  function handleOnClick() {
    setDropdown((prev) => !prev);
  }

  if(typeof window !== 'undefined') {
    window.addEventListener('click', (e) => {
      if(e.target !== dropdownRef.current && e.target !== menuRef.current){
        setDropdown(false);
      };
    });
  };

  return (
    <section className=" flex w-full">
      <div>
        <button
          onClick={() => handleOnClick()}
          ref={menuRef}
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-cream bg-green font-bold rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center ms:hidden"
          type="button"
        >
          Menu{" "}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {dropdown && (<div
          ref={dropdownRef}
          id="dropdown"
          className={`z-10 absolute top-16 mt-1 divide-cream-100 shadow w-24 ms:hidden`}
        >
          <ul
            className="py-2 text-lg bg-green text-cream"
            aria-labelledby="dropdownDefaultButton"
          >
            {pages.map((menuItems) => {
              return <MenuItems key={menuItems.id} data={menuItems} handleOnClick={handleOnClick} />;
            })}
            {/* <div className="w-full flex justify-center">
              <ThemeSwitcher />
            </div> */}
          </ul>
        </div>)}
      </div>
{/* desktop view menu - */}
      <div className="w-full hidden ms:flex items-center ">
        <Link href="/" className="ml-3 text-lg text-cream">
          About
        </Link>
        <Link href="/projects" className="ml-3 text text-cream ">
          Projects
        </Link>
        <Link href="https://github.com/sam1234g" target="_blank" className="ml-3 text-cream ">
          <Image alt="github" src="/assets/github.png" width={30} height={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/samantha-german-241265289/" target="_blank" className="ml-3 text-cream">
        <Image alt="linkedin" src="/assets/linkedin.png" width={30} height={30} />

        </Link>
        {/* <ThemeSwitcher /> */}
      </div>
    </section>
  );
}
