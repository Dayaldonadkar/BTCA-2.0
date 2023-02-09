import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#000E1D] flex justify-center">
      <div className="flex justify-between text-white w-3/5 py-2">
        <div>
          <h1 className="text-3xl">BTCA</h1>
        </div>

        <div className="flex items-center space-x-10">
          <h1>Home</h1>
          <h1>News</h1>
          <h1>Arbiters</h1>
          <h1>Organizers</h1>
          <h1>Gallery</h1>
          <h1>Coaches</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
