import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <div className="bg-horse-404 w-full h-screen bg-no-repeat bg-center bg-cover">
      <div className="w-full h-screen bg-gray-700/50 text-white">
        <p className="text-center text-2xl sm:text-5xl">
          404
          <br />
          the page not found
        </p>
        <Link to="/">go to home page</Link>
      </div>
    </div>
  );
}

export default NotFound;
