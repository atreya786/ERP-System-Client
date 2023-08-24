import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Chip } from "@material-tailwind/react";

function Home() {
  const { role, name } = useContext(AuthContext);
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
  const handleStudentAttendance = () => {
    navigate("/studentattendance");
  };
  const handleDms = () => {
    navigate("/adddms");
  };
  function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <div className="">
      <div className="text-3xl lg:mx-28 lg:flex mx-4 py-2">
        <Chip
          className="lg:my-0 my-1  lg:mx-2"
          value={name}
          variant="ghost"
          icon={<Icon />}
        />
        <Chip
          variant="ghost"
          color="green"
          size="sm"
          value="Online"
          icon={
            <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
          }
        />
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-5 lg:mx-28 my-4 mx-3 lg:py-4  ">
        <div className="h-52 bg-green-600 lg:my-0 my-4">
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
        {(role === "Admin" || role === "Staff") && (
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
        )}
        {role === "Student" && (
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
              onClick={handleStudentAttendance}
            >
              More info
            </div>
          </div>
        )}
        <div className="h-52 bg-blue-700 lg:my-0 my-4">
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
        <div className="h-52 bg-deep-purple-500 lg:my-0 my-4">
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

        {role === "Admin" && (
          <>
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
          </>
        )}
        {(role === "Admin" || role === "Staff") && (
          <div className="h-52 bg-purple-800 lg:my-0 my-4">
            <div className="text-center text-3xl py-2 font-bold text-white border-b-2">
              Dms
            </div>
            <img
              className="h-28 ml-36 lg:ml-40 py-1 my-1  mix-blend-darken"
              src="https://cdn-icons-png.flaticon.com/512/685/685887.png"
              alt="error"
            />
            <div
              className="cursor-pointer  text-center py-1 bg-black text-white opacity-70"
              onClick={handleDms}
            >
              More info
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
