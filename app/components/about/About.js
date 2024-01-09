import Link from 'next/link'
import Image from "next/image";

export default function About() {

  return (
    <section className="bg-midnight text-cream border-green border-8 rounded-3xl w-full min-w-[340px] min-h-[400px] max-w-[1900px] flex flex-col my-10 lg:flex-row justify-center items-center py-10 px-8 lg:px-16 xl:px-36 2xl:px-64">
    <div className="lg:w-full flex justify-start items-start">
    <Image className="py-10"
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
