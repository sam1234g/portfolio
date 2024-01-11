import Link from "next/link";

export default function MenuItems({data, handleOnClick}) {
    return (
        <li onClick={() => handleOnClick()}>
        <Link href={data.link} target="_blank" className="block px-4 py-2">{data.label}</Link>
      </li>
    );
  }
  