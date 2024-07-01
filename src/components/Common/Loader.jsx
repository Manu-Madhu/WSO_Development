
'use client'
import React from "react";
import { FallingLines } from "react-loader-spinner";

const LoaderData = () => {
  return (
    <div>
      <FallingLines
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoaderData;
