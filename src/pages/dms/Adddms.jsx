import React, { useState, useContext, useEffect } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Adddms() {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const { role, name } = useContext(AuthContext);

  const handleAddDms = async () => {
    try {
      const newDmsData = {
        dmsUserName: name,
        description,
        date,
      };
      await axios.post("http://localhost:5000/api/dms", newDmsData);
      toast.success("DMS sent Successfully");
      setDescription("");
      setDate("");
    } catch (error) {
      toast.error("Error sending DMS:", error);
    }
  };

  return (
    <div className="lg:mx-[35rem] lg:py-24 py-[10rem]  ">
      <Card
        className="lg:w-[30rem] shadow-2xl shadow-gray-800 px-7 lg:px-12 lg:mx-0 mx-2"
        color="transparent"
        shadow={true}
      >
        <Typography
          variant="h4"
          className="mx-14 lg:mx-[5rem]"
          color="blue-gray"
        >
          DMS Message!!
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              type="date"
              label="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Textarea
              type="text"
              size="lg"
              label="Message"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {(role === "Admin" || role === "Staff") && (
            <Button className="mt-6 my-4" fullWidth onClick={handleAddDms}>
              Send
            </Button>
          )}
        </form>
      </Card>
    </div>
  );
}

export default Adddms;
