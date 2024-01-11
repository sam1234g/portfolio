import Button from "./Button";

export default function Footer() {
    return (
         <footer className="flex flex-col w-screen min-w-[250px] pt-3 bg-darkgreen text-cream">
          
          <div className="flex flex-wrap flex-col items-start ml-6 z-10">
            {/* <div className="p-px bg-white dark:bg-black w-10/12 h-0 "></div> */}
            <div className="w-10/12 pb-5 pt-2 text-lg">
              <p>
                &copy; Copyright {new Date().getFullYear()} Samantha German
              </p>
            </div>
          </div>
        </footer>
  
    );
  }
  