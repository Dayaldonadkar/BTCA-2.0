import React from "react";

const Quote = () => {
  return (
    <div className="relative">
      <div className="">
        <img className="w-full" src="/ChessBoard.png" alt="" />
      </div>
      <div className="absolute flex justify-center  bottom-36 left-96">
        <div className="">
          <div className="bg-[#F7EEE7] text-center px-20  py-32 rounded-lg space-y-10">
            <div className="text-lg text-[#63270F]">
              <p>There is always the risk of being over</p>
              <p>confident when you are performing to face</p>
              <p>a weaker player</p>
            </div>
            <div className="text-base">
              <p className="">Vishwanathan Anand</p>
              <p className="text-xs font-light">Indian Grand Master</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
