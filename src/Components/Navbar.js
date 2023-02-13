import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#000E1D] flex justify-center">
      <div className="flex justify-between text-white w-3/5 py-2">
        <div>
          <Link to="/">
            <h1 className="text-3xl">BTCA</h1>
          </Link>
        </div>

        <div className="flex items-center space-x-10">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/News">
            <h1>News</h1>
          </Link>
          <Link to="/Arbiters">
            <h1>Arbiters</h1>
          </Link>
          <Link to="Organizers">
            <h1>Organizers</h1>
          </Link>
          <Link to="Gallery">
            <h1>Gallery</h1>
          </Link>
          <Link to="/Coaches">
            <h1>Coaches</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
