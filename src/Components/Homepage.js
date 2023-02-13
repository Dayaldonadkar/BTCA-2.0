import React from "react";
import Address from "./Address";
import Mid from "./Mid";
import News from "./News";
import Objective from "./Objective";
import Quote from "./Quote";
import Working from "./Working";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Mid />
      <News />
      <Working />
      <Objective />
      <Quote />
    </div>
  );
};

export default Homepage;
