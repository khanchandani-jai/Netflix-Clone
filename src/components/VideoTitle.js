import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="my-2 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 text-xl rounded-lg hover:bg-opacity-80">
          <span>&#9658; </span>
          Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2 hidden md:inline-block ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
