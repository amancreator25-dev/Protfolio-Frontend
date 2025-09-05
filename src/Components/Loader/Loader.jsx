import React from "react";

function Loader() {
  return (
    <div className="flex justify-center m-[20%] items-center h-500px">
      <div className="w-25 h-25 border-4 border-purple-700 border-t-transparent rounded-full animate-spin shadow-25px duration-200"></div>
    </div>
  );
}

export default Loader;
  
