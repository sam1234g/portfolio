import Link from 'next/link'
import Image from "next/image";

export default function About() {

  return (
    <section className="bg-midnight text-cream border-green border-8 rounded-3xl w-full min-w-[250px] min-h-[400px] max-w-[1100px] flex flex-col my-10 lg:flex-row lg:mx-20 xl:mx-40 justify-center items-center py-10 px-8 md-px-8 ms:px-8 ml:px-12 lg:px-16 xl:px-18 2xl:px-24 ">
    <div className="lg:w-full flex justify-start items-start">
    <Image className="py-4 mb-2 lg:py-10 lg:mb-0 xl:py-10 xl:mb-0 2xl:py-10 2xl:mb-0"
      src="/assets/logo.png"
      width={300}
      height={300}
      alt="Sam German Logo"
    />
  </div>
  <div className="lg:w-full flex flex-col items-center p-1 min-h-[333px]">
    <h3 className="md:text-6xl text-5xl text-left bg-clip-text">
      About Me
    </h3>
    <p className="text-xl text-left mt-4">
    I&apos;m Sam, a former theatre director turned box office assistant turned software developer. My journey is defined by a passion for problem solving and a desire to create amazing user experiences; I have fallen in love with technology&apos;s ability to inspire as well as assist.</p>
<br/>
<p className="text-xl text-left mt-4">I bring a storyteller&apos;s mindset to coding, finding joy in unraveling complex problems, and cannot wait to bring my creative thinking and analytical skills to innovative projects.
    </p>
  </div>
  
</section>
  );
}
