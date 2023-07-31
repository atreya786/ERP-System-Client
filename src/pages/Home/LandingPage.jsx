import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate()
  const admin = ()=>{
    navigate("/adminLogin")
  }
  const staff = ()=>{
    navigate("/staffLogin")
  }
  const student = ()=>{
    navigate("/studentLogin")
  }
  return (
    <div>
      <div
        className="h-[36rem]"
        style={{
          backgroundImage:
            "url(https://themes.iamabdus.com/royal/1.3/img/home/slider/slider_image_1.jpg)",
        }}
      >
        <div className="bg-black lg:h-60 w-screen lg:w-[50rem] absolute lg:absolute top-[20rem] lg:top-[21rem] lg:rounded-r-lg opacity-80 text-white">
          <div className="text-4xl py-2 text-center font-bold lg:py-1">
            WELCOME TO ROYAL COLLEGE
          </div>
          <div className="px-5 text-justify lg:my-3 lg:px-9 lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            quis? Officiis dicta dolores suscipit nostrum numquam, velit earum,
            perferendis, quo molestias tempora ut cupiditate voluptatibus
            deleniti? Natus delectus similique numquam Lorem ipsum dolor, sit
            amet consectetur adipisicing elit.
          </div>

          <button className="h-10 lg:my-0 my-4 bg-green-500  px-3 lg:px-4 text-xl font-bold rounded-lg hover:bg-green-600 ml-7 lg:ml-9">
            LEARN MORE
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 ">
        <div className=" lg:grid lg:grid-cols-3 lg:gap-10 px-3 py-4 lg:px-48 lg:py-20">
          <div className=" py-2 lg:my-0 my-6 lg:py-2  bg-sky-500 rounded">
            <div className="text-3xl font-bold my-1 text-white text-center">
              ADMIN
            </div>
            <hr />
            <img
              className="h-28 ml-32 my-1  mix-blend-darken"
              src="https://www.pngfind.com/pngs/m/643-6438921_admin-comments-admin-icon-png-transparent-png.png"
              alt="error"
            />
            <button onClick={admin} className="h-12 px-5 text-xl ml-[38%] font-semibold bg-sky-950 text-white rounded-lg py-1 hover:bg-sky-800">
              Login
            </button>
          </div>
          <div className="py-2 lg:my-0 my-6 bg-sky-500 rounded">
            <div className="text-3xl  font-bold my-1 text-white text-center">
              STAFF
            </div>
            <hr />
            <img
              className="h-28 ml-32 my-1  mix-blend-darken"
              src="https://www.nicepng.com/png/detail/40-409786_png-file-svg-male-circle-icon.png"
              alt="error"
            />
            <button onClick={staff} className="h-12 px-5 text-xl ml-[38%] font-semibold bg-sky-950  hover:bg-sky-800 text-white rounded-lg py-1">
              Login
            </button>
          </div>
          <div className="py-2 lg:my-0 my-6  bg-sky-500 rounded">
            <div className="text-3xl font-bold my-1 text-white text-center">
              STUDENT
            </div>
            <hr />
            <img
              className="h-28 ml-32 my-1  mix-blend-darken"
              src="https://flyclipart.com/thumb2/student-read-book-png-icon-free-download-369784.png"
              alt="error"
            />
            <button onClick={student} className="h-12 px-5 text-xl ml-[38%] font-semibold bg-sky-950  hover:bg-sky-800 text-white rounded-lg py-1">
              Login
            </button>
          </div>
          
        </div>
      </div>

      <hr />

      <div className="lg:grid lg:grid-cols-2 lg:gap-9 px-10 lg:px-28 py-5 lg:border-t-8 lg:py-20">
        <div className="lg:flex lg:border-r-8">
          <img
            className=" lg:h-72 lg:w-80"
            src="https://themes.iamabdus.com/royal/1.3/img/home/video/video_image.jpg"
            alt="error"
          />
          <div className="lg:mx-7 lg:my-0 my-4 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            consectetur ante volutpat sem aliquam lobortis. Mauris porta
            fermentum volutpat. Praesent est sapien, tincidunt vel arcu vitae,
            mattis sollicitudin lectus. Mauris porta fermentum volutpat.
            Praesent est sapien, tincidunt vel arcu vitae.
            <div>
              <button className="bg-sky-600 hover:bg-sky-800 text-white my-5 w-72 lg:w-64 px-4 py-3 text-xl">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="text-3xl font-bold border-t-green-400">
            UPCOMING EVENTS
          </div>
          <hr />
          <div className="flex my-3">
            <div className="px-2 py-1 border-4">
              <div className="text-4xl font-bold text-center">24</div>
              <div className="text-center">january</div>
            </div>
            <div className=" mx-3 lg:mx-5 lg:text-2xl font-semibold">
              Offered in small class sizes with great emphasis... Main Campus{" "}
            </div>
          </div>
          <hr />
          <div className="flex my-3">
            <div className="px-2 py-1 border-4">
              <div className="text-4xl font-bold text-center">24</div>
              <div className="text-center">january</div>
            </div>
            <div className=" mx-3 lg:mx-5 lg:text-2xl font-semibold">
              Offered in small class sizes with great emphasis... Main Campus{" "}
            </div>
          </div>
          <hr />
          <button className="bg-green-600 hover:bg-green-800 text-white my-5 w-64 px-4 py-3 text-xl ml-5 lg:ml-36">
            MORE EVENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
