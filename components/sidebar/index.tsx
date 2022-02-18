import Image from "next/image";
import React from "react";
import me from "../../assets/images/me.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        className="mx-auto border rounded-full"
        src={me}
        alt="my picture"
        height="8rem"
        width="8rem"
        layout='responsive'
        quality='100'
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Amjad</span>Hossain
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <p className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full dark:bg-dark-200">
        <GiTie className="w-6 h-6" /> Download Resume
      </p>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="" className="w-8 h-8 cursor-pointer">
          <AiFillYoutube />
        </a>
        <a href="" className="w-8 h-8 cursor-pointer">
          <AiFillGithub />
        </a>
        <a href="" className="w-8 h-8 cursor-pointer">
          <AiFillLinkedin />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-1" />
          <span>Feni Chitagong, bangladesh</span>
        </div>
        <p className="my-2">amjad.rabby1@gmail.com</p>
        <p className="my-2">01881151233</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:amjad.rabby1@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
      >
        Toglle Theme
      </button>
    </div>
  );
};

export default Sidebar;
