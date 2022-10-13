import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center text-textColor text-xl font-semibold">
      <p>2022 Moe Food All rights reserved</p>
      <div className="flex flex-row text-center mt-[10px] ">
        <p className="flex gap-2 text-3xl">
          <AiFillInstagram />
          <AiOutlineTwitter />
          <AiFillGithub
            className="cursor-pointer"
            onClick={() => {
              window.open("https://www.github.com/imoeadel", "_blank");
            }}
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
