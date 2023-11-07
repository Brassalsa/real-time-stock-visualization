import React from "react";

const Loading = () => {
  return (
    <div className="h-96 flex flex-col">
      <div className="flex justify-center animate-pulse transition-all duration-500 items-center min-h-full">
        <div className="animate-spin  rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    </div>
  );
};

export default Loading;
