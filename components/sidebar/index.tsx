import Image from "next/image";
import React from "react";
import me from "../../assets/images/me.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  return (
    <div>
      {/* <Image
        className="w-32 h-32 mx-auto rounded-fill"
        src="../"
        alt="my picture"
      /> */}
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Amjad</span>Hossain
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <p className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full">
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
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-1"/>
          <span>Feni Chitagong, bangladesh</span>
        </div>
        <p className="my-2">amjad.rabby1@gmail.com</p>
        <p className="my-2">01881151233</p>
      </div>
      <button
        className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none"
        onClick={() => window.open("mailto:amjad.rabby1@gmail.com")}
      >
        Email me
      </button>
      <button className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none">
        Dark ui
      </button>
    </div>
  );
};

export default Sidebar;
