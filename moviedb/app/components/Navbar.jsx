import React from "react";

const Navbar = () => {
  return (
    <nav className="h-16 bg-[rgb(3,37,65)] flex justify-center items-center">
      <div className=" flex justify-between items-center w-[80%] h-[80%]">
        <div className="text-white flex justify-evenly items-center w-[45%] h-[80%]">
          <div className="w-[40%] h-[50%]">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="logo"
              className="h-[100%] w-[100%]"
            />
          </div>
          <div className="w-[15%]"> Popular</div>
          <div className="w-[20%]">Top Rated</div>
          <div className="w-[15%]">Upcomming</div>
        </div>
        <div className="text-white flex justify-evenly items-center w-[30%] h-[80%]">
          <div className="w-[25%] h-[90%] flex justify-center items-center rounded-lg cursor-pointer bg-[#172f51] hover:bg-[#3f0e38]">Login</div>
          <div className="w-[70%] h-full flex items-center justify-evenly">
            <input
              type="search"
              placeholder="Search"
              className="w-[70%] h-full bg-transparent border border-slate-200 rounded-xl outline-none px-2 "
            />
            <button className="cursor-pointer w-[20%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;