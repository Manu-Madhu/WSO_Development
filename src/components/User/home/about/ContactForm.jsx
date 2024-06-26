"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    address: "",
    designation: "",
    phoneNumber: "",
    comments: "",
  });

  //   OnChange Input Handler
  const inputChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phoneNumber: value,
    });
  };

  return (
    <form action="" className="w-full  grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Name */}
      <div className="flex flex-col gap-1  w-full">
        <label htmlFor="" className="text-black/70 font-medium text-[14px]">
          Name
        </label>
        <input
          type="text"
          value={formData?.name}
          onChange={inputChangeHandler}
          name="name"
          required
          placeholder="Your name"
          className="text-sm border rounded-lg p-3 focus:outline-none text-black/85"
        />
      </div>

      {/* Designation */}
      <div className="flex flex-col gap-1  w-full">
        <label htmlFor="" className="text-black/70 font-medium text-[14px]">
          Designation
        </label>
        <input
          type="text"
          value={formData?.designation}
          onChange={inputChangeHandler}
          name="designation"
          required
          placeholder="Designation"
          className="text-sm border rounded-lg p-3 focus:outline-none text-black/85"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1  w-full">
        <label htmlFor="" className="text-black/70 font-medium text-[14px]">
          Email
        </label>
        <input
          type="email"
          value={formData?.email}
          onChange={inputChangeHandler}
          name="email"
          required
          placeholder="you@company.com"
          className="text-sm border rounded-lg p-3 focus:outline-none text-black/85"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1  w-full">
        <label htmlFor="" className="text-black/70 font-medium text-[14px]">
          Phone number
        </label>
        <PhoneInput
          country={"in"}
          value={formData?.phoneNumber}
          onChange={handlePhoneChange}
          inputProps={{
            name: "phoneNumber",
            required: true,
            // autoFocus: true,
          }}
          containerStyle={{
            width: "100%",
          }}
          inputStyle={{
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc",
            padding: "12px 14px",
            fontSize: "14px",
            color: "black",
          }}
          buttonStyle={{
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
          }}
        />
      </div>

      {/* Company +  Address */}
      <div className="flex flex-col gap-1  w-full">
        <label htmlFor="" className="text-black/70 font-medium text-[14px]">
          Company
        </label>
        <input
          type="text"
          value={formData?.company}
          onChange={inputChangeHandler}
          name="company"
          required
          placeholder="company"
          className="text-sm border rounded-lg p-3 focus:outline-none text-black/85"
        />

        <label
          htmlFor=""
          className="text-black/70 font-medium text-[14px] mt-5"
        >
          Address
        </label>
        <input
          type="text"
          value={formData?.address}
          onChange={inputChangeHandler}
          name="address"
          required
          placeholder="Address"
          className="text-sm border rounded-lg p-3 focus:outline-none text-black/85"
        />
      </div>

      {/* Comment */}
      <div className="flex flex-col gap-1  w-full h-full ">
        <label htmlFor="" className="text-black/70 font-medium text-[14px]">
          Comments
        </label>
        <textarea
          type="text"
          value={formData?.comments}
          onChange={inputChangeHandler}
          name="comments"
          required
          placeholder="comments here"
          className="text-sm border w-full h-full rounded-lg p-3 focus:outline-none text-black/85"
        />
      </div>

      {/* Button */}
      <div className="flex flex-col gap-1  w-full h-full ">
        <button className="bg-primaryColor p-2 rounded-lg text-white text-sm">
          Get started
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
