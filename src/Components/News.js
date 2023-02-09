import React from "react";

const News = () => {
  return (
    <div className="flex justify-center pt-5">
      <div className="w-3/5 bg-[#F2F2F2] space-y-5 py-10 rounded-lg">
        <div className="mx-10 text-4xl border-l-8 border-gray-500 pl-2">
          <h1>Latest Stories</h1>
        </div>

        <div className="flex ml-10 space-x-5">
          <div>
            <img
              className="w-96 rounded-3xl"
              src="chesstmt.jpg"
              alt="chesstmt"
            />
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="text-2xl">
              32nd Bramhapuri School and Open Chess Championship 2022 concludes
              with prize distribution ceremony
            </h1>
            <p>26 Jan 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
