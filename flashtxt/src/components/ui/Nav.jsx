import React from "react";

const Nav = () => {
  return (
    <div className="w-full h-[50px] bg-green-200  px-12 flex justify-between items-center ">
      <h2 className="text-2xl font-bold ">Swiftsend</h2>
      <div className=" flex gap-x-4">
        <button className="text-xm">ABOUT</button>
        <button className="text-xm">SPONSHER</button>
      </div>
    </div>
  );
};
  
export default Nav;
