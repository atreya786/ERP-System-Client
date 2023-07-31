import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { logout,token } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <div className="bg-[#0060b1] lg:h-10 lg:flex lg:justify-between">
        <div className=" flex lg:flex text-white py-2 lg:ml-28 lg:text-white lg:py-2 ">
          <div className=" ml-4 lg:ml-0">0123 45678910</div>
          <div className="ml-20  lg:ml-28">info@yourdomain.com</div>
        </div>
        <div>
          <div className=" ml-4  text-white py-1 lg:mr-28 lg:py-2 lg:text-white">
            Welcome, Subarna Kesshari Sutar
          </div>
        </div>
      </div>

      <div className=" h-16 flex justify-between lg:h-16  lg:flex lg:justify-between  ">
        <div className="ml-4 py-3 lg:ml-28 lg:py-2">
          <img
            className="h-9 cursor-pointer lg:h-10 lg:cursor-pointer"
            src="https://themes.iamabdus.com/royal/1.3/img/logo.png"
            alt="logo"
          />
        </div>
        <div>
          {token && (
            <button
              onClick={handleLogout}
              className="bg-sky-500 px-2 py-2 my-3 rounded font-semibold mx-5 lg:px-3 lg:py-2 lg:my-2 lg:mx-28 lg:rounded lg:font-semibold lg:hover:bg-sky-600"
            >
              Logout
            </button>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
