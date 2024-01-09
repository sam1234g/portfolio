import Link from 'next/link'
export default function About() {

  return (
    <section className="bg-midnight text-cream border-green border-8 rounded-3xl w-full min-w-[340px] min-h-[400px] max-w-[1900px] flex justify-center items-center py-10 px-8 lg:px-16 xl:px-36 2xl:px-64  ">
      <div className="w-4/5 flex flex-col items-center p-1 min-h-[333px]">
        <h3 className="md:text-6xl text-5xl text-center w-96 bg-clip-text">
          Example Text
        </h3>
        <p className="text-xl text-center mt-4">
        more text
        </p>
        
        </div>
    </section>
  );
}
