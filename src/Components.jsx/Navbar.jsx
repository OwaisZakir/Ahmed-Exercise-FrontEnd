import React from "react";

function Navbar() {
  return (
    <>
      <nav className="w-full bg-green-900 p-4 px-3  md:py-6 md:px-20 "> 
        {/* Wrap input and label and menu in same parent */}
        <div className="relative">
          {/* ✅ CHECKBOX placed at top-level inside the parent */}
          <input type="checkbox" id="menu-toggle" className="hidden peer" />

          {/* ✅ Top bar: logo + label + desktop nav */}
          <div className="flex items-center justify-between">
            <div>
              <img src="./Images/logo.png" alt="Logo" className=" w-[140px]" />
            </div>

            {/* Label for mobile (acts as hamburger icon) */}
            <label
              htmlFor="menu-toggle"
              className="text-white text-4xl cursor-pointer md:hidden"
            >
              &#9776;
            </label>

            {/* Desktop menu */}
            <ul className="hidden md:flex gap-8 text-white items-center">
              <li className="hover:text-orange-400 cursor-pointer">Home</li>
              <li className="hover:text-orange-400 cursor-pointer">About</li>
              <li className="hover:text-orange-400 cursor-pointer">
                Activities
              </li>
              <li className="hover:text-orange-400 cursor-pointer">Contact</li>
              <li>
                <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded-2xl">
                  DONATE
                </button>
              </li>
            </ul>
          </div>

          {/* ✅ Mobile menu (peer-checked works now) */}
          <div className="peer-checked:flex hidden flex-col items-center mt-4 bg-green-800 text-white p-5 rounded md:hidden space-y-3">
            <a href="#" className="hover:text-orange-400">
              Home
            </a>
            <a href="#" className="hover:text-orange-400">
              About
            </a>
            <a href="#" className="hover:text-orange-400">
              Activities
            </a>
            <a href="#" className="hover:text-orange-400">
              Contact
            </a>
            <button className=" bg-yellow-300 hover:text-white text-black px-4 py-2 rounded-2xl">
              DONATE
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
