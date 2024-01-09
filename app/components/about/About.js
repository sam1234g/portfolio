import Link from 'next/link'
import Image from "next/image";

export default function About() {

  return (
    <section className="bg-midnight text-cream border-green border-8 rounded-3xl w-full min-w-[340px] min-h-[400px] max-w-[1900px] flex flex-col lg:flex-row justify-center items-center py-10 px-8 lg:px-16 xl:px-36 2xl:px-64">
    <div className="lg:w-full w-4/5 flex justify-center items-center">
    <Image className="py-10"
      src="/assets/logo.png"
      width={300}
      height={300}
      alt="Sam German Logo"
    />
  </div>
  <div className="lg:w-full w-4/5 flex flex-col items-center p-1 min-h-[333px]">
    <h3 className="md:text-6xl text-5xl text-left bg-clip-text">
      Example Text
    </h3>
    <p className="text-xl text-left mt-4">
      more text
    </p>
  </div>
  
</section>
  );
}
