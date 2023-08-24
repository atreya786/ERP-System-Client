import { Carousel, Typography, Button } from "@material-tailwind/react";

function LandingPage() {
  return (
    <>
      <Carousel>
      <div className="relative h-[40rem] w-full">
          <img
            src="https://chithiraicollegeofnursing.com/img/home/home01.jpg"
            alt="error"
            className="h-[40rem] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-[40rem] w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="orange"
                className="mb-4 text-3xl md:text-4xl lg:text-6xl"
              >
                Building technology for human progress
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                We are an engineering institute advancing science and technology education for students from all walks of life.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="orange">
                  Explore
                </Button>
                
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[40rem] w-full">
          <img
            src="https://img.freepik.com/free-photo/young-happy-students-walking-while-talking-looking-aside_171337-13418.jpg"
            alt="error"
            className="h-[40rem] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-[40rem] w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="orange"
                className="mb-4 text-3xl md:text-4xl lg:text-6xl"
              >
                You Can Learn Anything
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="orange">
                  Explore
                </Button>
                
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative h-[40rem] w-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="error"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-[40rem] w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="orange"
                className="mb-4 text-3xl md:text-4xl lg:text-6xl"
              >
                The Beauty of Books
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="orange">
                  Explore
                </Button>
                
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-9 px-10 lg:px-28 py-3 lg:border-t-8 lg:py-20">
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
              <button className="bg-orange-600 hover:bg-orange-800 text-white my-5 w-72 lg:w-64 px-4 py-3 text-xl">
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
      <hr />
      <div className="lg:mx-28 py-5 mx-9 lg:py-5">
        <div className="text-center text-4xl font-semibold py-3 ">
          Our training program
        </div>
        <div className="lg:grid lg:grid-cols-4 gap-4 py-5">
          <div className="border shadow-slate-800 shadow-2xl lg:my-0 my-5">
            <img
            className="px-3 py-3 h-[12rem]"
              src="https://webbocket.com/wp-content/uploads/2023/07/1_k0SazfSJ-tPSBbt2WDYIyw.jpg"
              alt=""
            />
            <div className="text-center text-xl font-semibold">Full stack web development in MERN stack</div>
            <button className="bg-orange-600 px-3 py-2 ml-24 rounded hover:bg-orange-800 lg:mx-24 my-3 text-white">
              Read more
            </button>
          </div>
          <div className="border shadow-slate-800 shadow-2xl lg:my-0 my-5">
            <img
            className="px-3 py-3 h-[12rem] w-[19.3rem]"
              src="https://webbocket.com/wp-content/uploads/2023/07/1720.jpg"
              alt=""
            />
            <div className="text-center text-xl font-semibold">Application development.</div>
            <button className="bg-orange-600 px-3 py-2 ml-24 rounded hover:bg-orange-800 lg:mx-24 my-3 mt-10 text-white">
              Read more
            </button>
          </div>
          <div className="border shadow-slate-800 shadow-2xl lg:my-0 my-5">
            <img
            className="px-3 py-3 h-[12rem] w-[19.3rem]"
              src="https://webbocket.com/wp-content/uploads/2023/07/data_science_using_python.jpg"
              alt=""
            />
            <div className="text-center text-xl font-semibold">Data science using python</div>
            <button className="bg-orange-600 px-3 py-2 ml-24 rounded hover:bg-orange-800 lg:mx-24 my-3 mt-10  text-white">
              Read more
            </button>
          </div>
          <div className="border shadow-slate-800 shadow-2xl lg:my-0 my-5">
            <img
            className="px-3 py-3 h-[12rem]"
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Data_Science.jpg"
              alt=""
            />
            <div className="text-center text-xl font-semibold">C++ With DSA</div>
            <button className="bg-orange-600 px-3 py-2 ml-24 rounded hover:bg-orange-800 lg:mx-24 my-3 mt-10 text-white">
              Read more
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default LandingPage;
