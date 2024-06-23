"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { navBar } from "@/data/nav.json";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";

const MobileView = ({ logo }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="logo">
        <Image src={logo} alt="logo" className="w-[220px]" />
      </div>

      <div className="pe-3">
        <FiMenu size={30} onClick={() => setModal(true)} />
      </div>

      {modal && (
        <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-white">
          <div className="absolute top-5 right-5">
            <IoCloseCircleOutline size={30} onClick={()=>setModal(!modal)} />
          </div>

          <div className="w-full h-full flex flex-col items-center justify-center">
            <Image src={logo} alt="logo" className="w-[320px]" />
            <ul className="">
              {navBar.map((item, index) => (
                <li
                  key={index}
                  className="text-black flex flex-col items-center justify-center text-[15px] capitalize mt-3"
                >
                  <div className="flex items-center justify-center gap-3 ">
                    <Link href={item.Link}>{item.Name}</Link>
                    {item?.subLinks && (
                      <div className="cursor-pointer">
                        <RiArrowDownSLine />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="buttons w-full flex flex-col items-center justify-center mt-5 gap-3 text-black text-[13px] font-medium capitalize">
              <Link href={"/"} className="w-full flex items-center  justify-center">
                <button className="w-1/2 border-2 border-primaryColor p-2 px-5 rounded-lg">
                  Register as member
                </button>
              </Link>
              <Link href={"/"} className="w-full flex items-center  justify-center">
                <button className="w-1/2 text-white bg-primaryColor p-2 px-5 rounded-lg">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileView;
