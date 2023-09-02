import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function About() {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div className="lg:flex lg:h-[32rem] py-7 px-12 ">
        <div className="lg:h-[25rem] lg:w-[30rem] bg-brown-800 rounded-md">
          <img
            className="lg:h-[25rem] lg:ml-[2rem] mt-[2rem]  rounded-lg"
            src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="clg-images"
          />
        </div>
        <div className=" lg:ml-12 mt-10 lg:w-[58rem] lg:h-[24rem] rounded-lg shadow-orange-400 shadow-lg border">
          <div className="text-4xl text-center font-semibold text-orange-600 ">
            OUR <span className="text-brown-800">GOAL</span>
          </div>
          <hr />
          <div className="px-5 text-justify py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            aliquid, eum fuga impedit modi, unde voluptatibus, ullam
            exercitationem aliquam perspiciatis laudantium maiores repudiandae
            delectus reiciendis illo dicta illum quasi dolores magnam ab esse
            ducimus facere in possimus. Perspiciatis, necessitatibus mollitia.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            vero. Aliquid non facere harum odit nesciunt ducimus inventore
            repellat molestiae, architecto, eum deserunt dolorem maxime natus
            voluptatem? Provident, qui reprehenderit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Excepturi odio magni dolorem aliquid
            mollitia! Ducimus expedita fugit, adipisci provident repellat quae
            nisi voluptates quisquam nesciunt. Nihil qui corrupti distinctio
            quisquam!Lorem Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Cupiditate placeat odit nemo vel enim eveniet ex dolorum
            excepturi adipisci iusto. Fuga ullam repellat repellendus? Quas
            rerum magni eos dignissimos animi?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Modi obcaecati nemo, sint deleniti
            doloremque vel tempore iste ad quasi harum eveniet qui veniam quod
            laudantium est voluptas. Officiis, voluptas{" "}
            <dicta className="lorem"></dicta>
          </div>
        </div>
      </div>
      <div className=" mx-8 lg:mx-20 my-6">
        <Accordion open={alwaysOpen}>
          <AccordionHeader onClick={handleAlwaysOpen}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
            cumque.
          </AccordionHeader>
          <AccordionBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            inventore pariatur sint labore? Necessitatibus at sint sunt. Beatae,
            soluta. Dolores, nesciunt. Cum, aliquid? Unde, dolorum cumque?
            Repudiandae ex laborum dolorum beatae! Quis esse beatae nobis
            pariatur, exercitationem cum excepturi rerum.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
            cumque.
          </AccordionHeader>
          <AccordionBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            inventore pariatur sint labore? Necessitatibus at sint sunt. Beatae,
            soluta. Dolores, nesciunt. Cum, aliquid? Unde, dolorum cumque?
            Repudiandae ex laborum dolorum beatae! Quis esse beatae nobis
            pariatur, exercitationem cum excepturi rerum.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
            cumque.
          </AccordionHeader>
          <AccordionBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            inventore pariatur sint labore? Necessitatibus at sint sunt. Beatae,
            soluta. Dolores, nesciunt. Cum, aliquid? Unde, dolorum cumque?
            Repudiandae ex laborum dolorum beatae! Quis esse beatae nobis
            pariatur, exercitationem cum excepturi rerum.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}

export default About;
