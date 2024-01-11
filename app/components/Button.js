import Image from "next/image";
import Link from "next/link";

const Button = ({ text, location }) => {
  const target = location.substring(0, 4) === "http" ? "_blank" : "_self";
  return (
    <Link href={`${location}` } target={target}>
      <button className="rounded-full font-bold flex flex-wrap p-2 border-4 border-green min-w-[150px] bg-midnight text-cream dark:bg-cream dark:text-midnight justify-evenly transition-all hover:scale-105">
        {`${text}`}
       
      </button>
    </Link>
  );
};

export default Button;