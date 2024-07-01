import React from "react";
import log from "@/../../public/Assets/user/nav/logo.png";
import { navBar } from "@/data/nav.json";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import MobileView from "./navBar/MobileView";

const UserNav = () => {
  return (
    <>
      {/* Desktop view */}
      <div className="max-w-[1280px] mx-auto w-full hidden md:flex items-center justify-between">
        <div className="logo">
          <Image src={log} alt="logo" className="w-[220px]" />
        </div>

        {/* Navigation links */}
        <div className="list">
          <ul className="flex gap-5">
            {navBar.map((item, index) => (
              <li
                key={index}
                className="text-black flex items-center gap-2 text-[15px]  capitalize"
              >
                <Link href={item.Link}>{item.Name}</Link>
                {item?.subLinks && (
                  <div className="cursor-pointer">
                    <RiArrowDownSLine />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="buttons flex gap-3 text-black text-[13px] font-medium capitalize">
          <Link href={"/pages/user/membership"}>
            <button className=" border-2 border-primaryColor p-2 px-5 rounded-lg">
              Register as member
            </button>
          </Link>
          <Link href={"/"}>
            <button className=" text-white bg-primaryColor p-2 px-5 rounded-lg">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile view */}
      <div className="max-w-[1280px] mx-auto w-full md:hidden flex justify-between items-center">
        <MobileView logo={log} />
      </div>
    </>
  );
};

export default UserNav;
