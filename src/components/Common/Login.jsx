"use client";

import Link from "next/link";
import { getSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const LoginPage = ({ modal }) => {
  const router = useRouter();

  // Login Modal Form Data Part
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Change Update
  const inputChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Handler
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email: formData?.email,
        password: formData?.password,
        redirect: false,
      });

      console.log(res);

      if (res?.error) {
        console.log("Invalid Credentials", error);
        return;
      }

      // Get the user data from the session
      const session = await getSession();

      if (session?.user?.userInfo?.role === "admin") {
        modal(false);
        return router.replace("/admin/news");
      } else {
        modal(false);
        return router.replace("/user/news");
      }
    } catch (error) {
      console.log("Error throwing while we try to login", error);
    }
  };

  return (
    <div className="fixed z-50   top-18 right-0 md:right-[8%] bg-white shadow rounded w-full md:w-[300px] p-5 md:p-10">
      <form
        onSubmit={submitHandler}
        action=""
        className="flex flex-col items-center justify-center gap-5 "
      >
        <IoCloseCircleOutline
          size={20}
          onClick={() => modal(false)}
          className="text-[#000000]/50 cursor-pointer absolute top-4 right-4"
        />

        {/* userName */}
        <div>
          <label
            className="text-sm font-semibold text-[#000000]/80 "
            htmlFor=""
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData?.email}
            onChange={inputChangeHandler}
            placeholder="Email"
            className="p-3 text-sm text-[#000000]/50 border border-[#000000]/20 w-full rounded-lg focus:outline-none"
          />
        </div>

        {/* password */}
        <div>
          <label
            className="text-sm font-semibold text-[#000000]/80 "
            htmlFor=""
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData?.password}
            onChange={inputChangeHandler}
            placeholder="********"
            className="p-3 text-sm text-[#000000]/50 border border-[#000000]/20 w-full rounded-lg focus:outline-none"
          />
        </div>

        {/* Button */}
        <div className="w-full">
          <button className="p-3 bg-primaryColor text-white text-sm rounded-lg w-full">
            Sign in
          </button>
        </div>

        {/* Sign-up link */}
        <div>
          <h4 className="text-[#000000]/50 text-sm">
            Don&apos;t have a account?{" "}
            <Link
              href={"/page/user/register"}
              className="font-semibold text-primaryColor "
            >
              Sign up
            </Link>
          </h4>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
