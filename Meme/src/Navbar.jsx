/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white p-3 w-screen">
      <ul className="flex flex-row  gap-2.5">
        <li>
          <Link className="Nav" to="/">Home</Link>
        </li>
        <li>
          <Link className="Nav" to="/meme">Memes</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
