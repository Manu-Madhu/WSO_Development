import Image from "next/image";
import React from "react";
import Logo from "@/../../public/Assets/user/nav/logo.png";

const UserFooter = () => {
  return (
    <div className="max-w-[1280px] mx-auto p-3">
      <hr />
      <div className="w-full flex flex-col justify-center items-center my-10">
        <Image src={Logo} alt="Logo" className="w-40 md:w-60" />

        <div className="text-center my-10 text-xs md:text-sm">
          <p>
            World Spice Organisation <br />
            CC No.2484(B), St F X Towers, K K Road, Kaloor, Ernakulam – 682017,
            Kerala, India
          </p>

          <p className="my-3">
            Mob: <span className="font-semibold">+91 9895354110</span> Mail:{" "}
            <span className="font-semibold">secretary@wsospice.org</span>
          </p>

          <div className="my-5 gap-3 flex items-center justify-center">
            <button className="border rounded-lg p-2 md:p-3 px-5">Login</button>
            <button className="border rounded-lg p-2 md:p-3 px-5 bg-primaryColor text-white">
              Register as a Member
            </button>
          </div>
        </div>

        <p className="text-xs md:text-sm">
          All Rights Reserved © World Spice Organisation 2011
        </p>
      </div>
    </div>
  );
};

export default UserFooter;
