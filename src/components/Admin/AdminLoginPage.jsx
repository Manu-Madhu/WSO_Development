"use client";

import { getSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function AdminLoginPage() {

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
    if(!formData?.email?.trim()) return toast.warning("Enter valid email")
    if(!formData?.password?.trim()) return toast.warning("Enter password")

    try {
      const res = await signIn("credentials", {
        email: formData?.email,
        password: formData?.password,
        redirect: false,
      });

      console.log(res);

      if (res?.status === 401) {
        console.log("Invalid Credentials", res?.error)
        toast.error("Invalid Credentials")
        return;
      }

      // Get the user data from the session
      const session = await getSession();

      if (session?.user?.userInfo?.role === "admin") {
        return router.replace("/admin/news");
      } else {
        return router.replace("/user/news");
      }
    } catch (error) {
      console.log("Error throwing while we try to login", error);
      toast.error("Something went wrong")
    }
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="w-full sm:w-1/3 mt-20 bg-white shadow rounded md:w-[300px] p-5 md:p-10">

        <form
          onSubmit={submitHandler}
          action=""
          className="flex flex-col items-center justify-center gap-5 "
        >

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
            <button
              type="submit"
              className="p-3 bg-primaryColor text-white text-sm rounded-lg w-full">
              Sign in
            </button>
          </div>


        </form>

      </div>

    </div>
  )
}

export default AdminLoginPage
