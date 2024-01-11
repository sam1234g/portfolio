import Image from "next/image";
import Link from "next/link";
import Dropdown from "./header components/Dropdown";
import Button from "./Button";


export default function Header({pages}) {
    return (
        <section className="min-w-[250px] grid grid-cols-3 md:grid-cols-[5fr_1fr_5fr] gap-x-2 place-content-evenly items-center width-screen h-20 justify-between px-3 py-8  bg-darkgreen text-cream dark:bg-cream dark:text-midnight ">
        <div className="flex justify-start ">
          <div className="flex justify-center">
            <Dropdown pages={pages} />
            
          </div>
        </div>
        <h1></h1>
<div className="flex justify-end items-center">
         
<Button text={"Contact Sam"} location={"/contact"} />
        </div>
      </section>
    );
  }
  