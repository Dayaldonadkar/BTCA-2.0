import React from "react";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";

const Address = () => {
  return (
    <div className="flex justify-center bg-[#f7eee7] ">
      <div className="flex justify-between space-x-20 w-3/5 py-10">
        <div className="space-y-5">
          <h1 className="text-2xl">Important Website</h1>
          <h1 className="text-sm px-5 font-light">
            All India Chess Federation
          </h1>
        </div>

        <div className="space-y-5">
          <h1 className="text-2xl">Important Link</h1>
          <div className="text-sm px-4 font-light space-y-2">
            <p>About</p>
            <p>Contact</p>
            <p>News</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex text-2xl items-center">
            <AddLocationAltIcon fontSize="large" />
            <h1>Location</h1>
          </div>
          <div className="px-5 space-y-2 font-light text-sm">
            <p>#183,Vikrant Book Depot,</p>
            <p>Renuka Mata Chowk,</p>
            <p>N.H.College Road,</p>
            <p>Bramhapuri,</p>
            <p>441206</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center">
            <HeadsetMicIcon fontSize="large" />
            <h1 className="text-2xl">Communication</h1>
          </div>

          <div className="px-5 space-y-2 font-light text-sm">
            <p>
              <AccessTimeIcon />
              10:00 am to 7:00 pm
            </p>
            <p className="text-center">
              <EmailIcon fontSize="small" />
              Btcassociation@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
