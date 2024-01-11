import Button from "./Button";

export default function Footer() {
    return (
      <section className="flex flex-col w-screen justify-between min-w-[360px]">
         <footer className="flex flex-col w-screen justify-between min-w-[360px] pt-3 bg-darkgreen text-cream dark:bg-cream dark:text-midnight ">
          {/* <div className="grid place-items-center gap-y-4 sm:grid-cols-2 md:flex md:flex-wrap justify-center items-center text-center z-10">
            
            
          </div> */}
          {/* <div className="flex flex-col items-center z-10  sm:items-end self-center pb-4">
                 <div className="justify-self-end mt-3">
             <h1>footer</h1>
            </div>
          </div> */}
          <div className="flex flex-wrap flex-col items-center z-10">
            {/* <div className="p-px bg-white dark:bg-black w-10/12 h-0 "></div> */}
            <div className="w-10/12 pb-5 pt-2 text-lg">
              <p>
                &copy; Copyright {new Date().getFullYear()} Sam German
              </p>
            </div>
          </div>
        </footer>
      </section>
    );
  }
  