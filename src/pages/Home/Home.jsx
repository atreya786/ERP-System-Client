import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { role, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const HandleProfile = () => {
    navigate("/profile");
  };
  const HandleAttendance = () => {
    navigate("/attendance");
  };
  const HandleLibrary = () => {
    navigate("/library");
  };
  const HandleExamination = () => {
    navigate("/examination");
  };

  const HandlePlacement = () => {
    navigate("/placement");
  };
  const HandleAccount = () => {
    navigate("/account");
  };

  const HandleStaff = () => {
    navigate("/staff");
  };

  const HandleStudent = () => {
    navigate("/student");
  };

  return (
    <div>
      <div className="text-3xl lg:mx-28 mx-4">
        <span className="font-bold">|</span> {role} Dashboard
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-5 lg:mx-28 my-4 mx-3 lg:my-5">
        <div className="h-52 bg-green-500 lg:my-0 my-4">
          <div className="text-center text-3xl py-2 font-bold text-white border-b-2">
            Profile
          </div>
          <img
            className="h-28 px-28 lg:px-32 my-1 rounded-full mix-blend-darken"
            src="https://www.pngitem.com/pimgs/m/20-203432_profile-icon-png-image-free-download-searchpng-ville.png"
            alt="error"
          />
          <div
            className="cursor-pointer  text-center py-1 bg-black text-white opacity-70"
            onClick={HandleProfile}
          >
            More info
          </div>
        </div>
        <div className="h-52 bg-purple-600 lg:my-0 my-4">
          <div className="text-center text-3xl py-2 font-bold text-white border-b-2">
            Attendance
          </div>
          <img
            className="h-28  ml-32 lg:ml-36 my-1  mix-blend-darken"
            src="https://www.clipartmax.com/png/middle/12-127125_image-attendance-icon-png.png"
            alt="error"
          />
          <div
            className="cursor-pointer  text-center py-1 bg-black text-white opacity-70"
            onClick={HandleAttendance}
          >
            More info
          </div>
        </div>
        <div className="h-52 bg-yellow-500 lg:my-0 my-4">
          <div className="text-center text-3xl py-2 font-bold text-white border-b-2">
            Library
          </div>
          <img
            className="h-28  ml-28 lg:ml-32 my-1  mix-blend-darken"
            src="https://www.clipartmax.com/png/middle/309-3095597_open-book-icon-png-clipart-free-library-open-book-icon-png.png"
            alt="error"
          />
          <div
            className="cursor-pointer  text-center py-1 bg-black text-white opacity-70"
            onClick={HandleLibrary}
          >
            More info
          </div>
        </div>
        <div className="h-52 bg-sky-500 lg:my-0 my-4">
          <div className="text-center text-3xl py-2 font-bold text-white border-b-2">
            Examination
          </div>
          <img
            className="h-28 ml-24 lg:ml-32 my-1  mix-blend-darken"
            src="https://w7.pngwing.com/pngs/109/690/png-transparent-computer-icons-clipboard-symbol-miscellaneous-angle-text.png"
            alt="error"
          />
          <div
            className="cursor-pointer  text-center py-1 bg-black text-white opacity-70"
            onClick={HandleExamination}
          >
            More info
          </div>
        </div>
        <div className="h-52 bg-orange-500 lg:my-0 my-4">
          {" "}
          <div className="text-center text-3xl py-2 font-bold text-white border-b-2">
            Training & Placement
          </div>
          <img
            className="h-28 ml-28 lg:ml-36 my-1  mix-blend-darken"
            src="https://banner2.cleanpng.com/20190606/ha/kisspng-computer-icons-clip-art-vector-graphics-portable-n-5cf8b0a7c47c78.1033711315598020238048.jpg"
            alt="error"
          />
          <div
            className="cursor-pointer  text-center py-1 bg-black text-white opacity-70"
            onClick={HandlePlacement}
          >
            More info
          </div>
        </div>
        <div className="h-52 bg-teal-500 lg:my-0 my-4">
          <div className="text-center text-3xl py-2 font-bold text-white border-b-2">
            Account
          </div>
          <img
            className="h-28 ml-24 lg:ml-32 my-1  mix-blend-darken"
            src="https://www.clipartmax.com/png/middle/420-4200493_handling-fee-fees-icon-png.png"
            alt="error"
          />
          <div
            className="cursor-pointer  text-center py-1 bg-black text-white opacity-70"
            onClick={HandleAccount}
          >
            More info
          </div>
        </div>
        <div className="h-52 bg-amber-500 lg:my-0 my-4">
          <div className="text-center text-3xl py-2 font-bold text-white border-b-2">
            Staffs
          </div>
          <img
            className="h-28 ml-36 lg:ml-40 my-1 py-1 mix-blend-darken"
            src="https://cdn-icons-png.flaticon.com/512/327/327729.png"
            alt="error"
          />
          <div
            className="cursor-pointer  text-center py-1 bg-black text-white opacity-70"
            onClick={HandleStaff}
          >
            More info
          </div>
        </div>
        <div className="h-52 bg-red-500 lg:my-0 my-4">
          <div className="text-center text-3xl py-2 font-bold text-white border-b-2">
            Students
          </div>
          <img
            className="h-28 ml-36 lg:ml-40 py-1 my-1  mix-blend-darken"
            src="https://cdn-icons-png.flaticon.com/512/327/327729.png"
            alt="error"
          />
          <div
            className="cursor-pointer  text-center py-1 bg-black text-white opacity-70"
            onClick={HandleStudent}
          >
            More info
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
