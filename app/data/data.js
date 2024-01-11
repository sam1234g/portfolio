import Image from 'next/image';

export const pages = [
    {
      id: 1,
      label: "About",
      link: "/",
    },
    {
      id: 2,
      label: "Projects",
      link: "/projects",
    },
    {
      id: 3,
      label: <Image alt="github" src="/assets/github.png" width={30} height={30} />
      ,
      link: "https://github.com/sam1234g",
    },
    {
      id: 4,
      label: <Image alt="linkedin" src="/assets/linkedin.png" width={30} height={30} />
      ,
      link: "https://www.linkedin.com/in/samantha-german-241265289/",
    },
  ];