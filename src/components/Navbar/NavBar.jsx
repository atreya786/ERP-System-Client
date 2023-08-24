import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import {
  Badge,
  Navbar,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Collapse,
  Drawer,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Chip } from "@material-tailwind/react";

function NavBar() {
  const [dmsdata, setDmsdata] = useState([]);

  const [open, setOpen] = React.useState(false);
  const [openTop, setOpenTop] = React.useState(false);
  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);
  const [openNav, setOpenNav] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/home");
  };
  const admin = () => {
    navigate("/adminLogin");
  };
  const staff = () => {
    navigate("/staffLogin");
  };
  const student = () => {
    navigate("/studentLogin");
  };
  const { logout, token, role } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  const handleAbout = () => {
    navigate("/about");
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    DmsData();
  }, [dmsdata]);

  const DmsData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/dms");
      setDmsdata(response.data);
    } catch (error) {
      toast.error("Error fetching dms:", error);
    }
  };

  const handleDeleteDms = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/dms/${id}`);
      toast.success("Dms Deleted Successfully");
      DmsData();
    } catch (error) {
      toast.error("Error deleting Dms:", error);
    }
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
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-1 lg:flex-row lg:items-center lg:gap-0">
      {token && (
        <>
          <Typography
            as="li"
            variant="small"
            color="blue-gray   "
            className="p-1 font-normal mx-2 py-"
          >
            <Badge
              className="invisible lg:visible"
              content={dmsdata.length}
              withBorder
            >
              <img
                className="h-8 rounded py-1 cursor-pointer invisible lg:visible "
                src="https://www.pngfind.com/pngs/m/225-2250632_svg-png-icon-android-notification-icon-png-transparent.png"
                alt="dmslogo"
                onClick={openDrawerTop}
              />
            </Badge>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray  "
            className="p-1 font-normal"
          >
            <Button
              className="text-brown-800 invisible lg:visible rounded-full"
              color="orange"
              onClick={handleDashboard}
            >
              DASHBOARD
            </Button>
          </Typography>
        </>
      )}

      {!token && (
        <>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Button
              className="text-brown-800 rounded-full"
              color="orange"
              onClick={handleAbout}
            >
              ABOUT
            </Button>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Button className="text-brown-800 rounded-full" color="orange">
              CONTACT
            </Button>
          </Typography>
        </>
      )}
      {!token && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Button
            onClick={handleOpen}
            variant="gradient"
            className="rounded-full"
            color="green"
          >
            Log in
          </Button>
        </Typography>
      )}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Log In !!</DialogHeader>
        <DialogBody divider>
          <div className=" lg:grid lg:grid-cols-3 gap-5">
            <div className=" py-2 lg:my-0 my-6 lg:py-2  bg-light-blue-500 rounded">
              <img
                className="h-20  ml-32 lg:ml-14 my-1  mix-blend-darken"
                src="https://www.pngfind.com/pngs/m/643-6438921_admin-comments-admin-icon-png-transparent-png.png"
                alt="error"
              />
              <button
                className=" px-5 text-lg  mx-28 lg:mx-10 font-semibold bg-orange-800  hover:bg-orange-900 text-white rounded-lg py-1 hover:bg-sky-800"
                onClick={admin}
              >
                ADMIN
              </button>
            </div>
            <div className=" py-2 lg:my-0 my-6 lg:py-2  bg-light-blue-500 rounded">
              <img
                className="h-20 ml-28 lg:ml-12 my-1  mix-blend-darken"
                src="https://www.nicepng.com/png/detail/40-409786_png-file-svg-male-circle-icon.png"
                alt="error"
              />
              <button
                className=" px-5 text-lg mx-28 lg:mx-10 font-semibold bg-orange-800  hover:bg-orange-900 text-white rounded-lg py-1 hover:bg-sky-800"
                onClick={staff}
              >
                STAFF
              </button>
            </div>
            <div className=" py-2 lg:my-0 my-6 lg:py-2  bg-light-blue-500 rounded">
              <img
                className="h-20 ml-32 lg:ml-14 my-1  mix-blend-darken"
                src="https://flyclipart.com/thumb2/student-read-book-png-icon-free-download-369784.png"
                alt="error"
              />
              <button
                className=" px-5 text-lg mx-24 lg:mx-7 font-semibold bg-orange-800 hover:bg-orange-900 text-white rounded-lg py-1 hover:bg-sky-800"
                onClick={student}
              >
                STUDENT
              </button>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>

      {token && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Button
            className="text-white rounded-full"
            color="green"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Typography>
      )}
    </ul>
  );
  return (
    <div className=" max-h-[768px] w-[screen] ">
      <Navbar className="sticky top-0 z-10  h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-1">
        <div className="flex items-center justify-between  text-blue-gray-900">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
            <img
              className="h-10 mt-1 lg:mt-0 lg:ml-12"
              src="https://storage.googleapis.com/production-bluehost-v1-0-2/792/950792/Chsy0p7Y/e741e305670946049c759b3619c05e0e"
              alt="logo"
            />
          </Typography>
          {token && (
            <>
              <Badge className="visible lg:invisible" content="4" withBorder>
                <img
                  className="h-8 rounded py-1 cursor-pointer visible lg:invisible "
                  src="https://www.pngfind.com/pngs/m/225-2250632_svg-png-icon-android-notification-icon-png-transparent.png"
                  alt="dmslogo"
                  onClick={openDrawerTop}
                />
              </Badge>
              <div className="lg:invisible visible">
                <img
                  className="h-7 mix-blend-darken"
                  src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                  alt="error"
                  onClick={handleDashboard}
                />
              </div>
            </>
          )}
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>

      {/* dms content */}
      <Drawer
        placement="top"
        open={openTop}
        onClose={closeDrawerTop}
        className="px-4 "
      >
        <div className="mb-6 flex items-center justify-between px-3">
          <Typography variant="h5" color="blue-gray">
            Dms
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawerTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div className="lg:px-6 py-2 h-[14rem] overflow-y-auto">
          {dmsdata.map((e) => (
            <>
              <div className=" lg:flex lg:px-2 px-2  lg:justify-around rounded   py-2 lg:py-1 border my-2 bg-blue-gray-300">
                <div className="py-1 lg:w-[70rem] overflow-x-auto">
                  {e.description}
                </div>
                <div className=" flex space-x-5 lg:flex lg:space-x-5 ">
                  <Chip
                    className="lg:my-0 my-1  lg:mx-2"
                    value={e.date}
                    variant="ghost"
                  />
                  {/* <div className="text-xs py-2 ">{e.dmsUserName}</div> */}
                  <Chip
                    className="lg:my-0 my-1  lg:mx-2"
                    value={e.dmsUserName}
                    variant="ghost"
                    icon={<Icon />}
                  />
                  {(role === "Admin" || role === "Staff") && (
                    <Button
                      variant="gradient"
                      color="red"
                      size="sm"
                      className="text-xs mx-2 px-1 py-1 rounded"
                      onClick={() => handleDeleteDms(e._id)}
                    >
                      DELETE
                    </Button>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </Drawer>
    </div>
  );
}

export default NavBar;
