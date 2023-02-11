import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Objective = () => {
  return (
    <div className="flex justify-center bg-[#FCF9F9]">
      <div className="flex w-3/5 space-x-48 py-12">
        <div className=" space-y-4">
          <h1 className="text-2xl">
            The objective of the Bramhapuri Taluka Chess Association shall be:
          </h1>
          <div className="flex">
            <p>
              <CheckCircleIcon />
            </p>
            <p className="font-light text-center">
              To Promote the game of Chess amongst the players, to increase
              their proficiency and to promote a chess culture.
            </p>
          </div>

          <div className="flex">
            <p>
              <CheckCircleIcon />
            </p>
            <p className="font-light text-center">
              To maintain general control over the chess activities in
              Bramhapuri Taluka in accordance with the constitution and the
              Rules and Regulations of All India Chess Federation (AICF) and
              World Chess Federation (FIDE) in force from time to time.
            </p>
          </div>
        </div>

        <div className="w-1/2">
          <img
            className="w-10/12 rounded-lg"
            src="https://images.pexels.com/photos/6114952/pexels-photo-6114952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="fasds"
          />
        </div>
      </div>
    </div>
  );
};

export default Objective;
