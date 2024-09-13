import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <div className="flex flex-col text-center">
      <div className="w-full text-white">
        <div class="text-8xl font-black">
          <span class="bg-clip-text text-transparent bg-gray-200/50">
            404
          </span>
        </div>
        <Link to="/">go to home page</Link>
      </div>
      <div className="flex justify-center items-center">
        <img src="https://i.pinimg.com/564x/a6/72/5b/a6725ba5ae7c3738f36676be34cc5b4b.jpg" alt="" />
      </div>
    </div>
  );
}

export default NotFound;
