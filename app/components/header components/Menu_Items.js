import Link from "next/link";

export default function MenuItems({data, handleOnClick}) {
  const target = data.link.substring(0, 4) === "http" ? "_blank" : "_self";

      
  return (
        <li onClick={() => handleOnClick()}>
        <Link href={data.link} target={target} className="block px-4 py-2">{data.label}</Link>
      </li>
    );
  }
  