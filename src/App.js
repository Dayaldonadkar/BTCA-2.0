import React from "react";
import Address from "./Components/Address";
import Mid from "./Components/Mid";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Objective from "./Components/Objective";
import Quote from "./Components/Quote";
import Working from "./Components/Working";

const App = () => {
  return (
    <div>
      <Navbar />
      <Mid />
      <News />
      <Working />
      <Objective />
      <Quote />
      <Address />
    </div>
  );
};

export default App;
