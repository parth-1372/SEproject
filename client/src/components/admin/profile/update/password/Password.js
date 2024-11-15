import React from "react";
import Header from "../../../Header";
import Sidebar from "../../../Sidebar";
import Body from "./Body";
import * as classes from "../../../../../utils/styles"; 
const Password = () => {
  return (
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className="flex flex-col bg-black h-[99%]  w-[99%] md:h-[99%] w-[99%] rounded-2xl shadow-2xl space-y-6 overflow-hidden">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Password;
