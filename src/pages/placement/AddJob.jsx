import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext";
import { Chip } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import axios from "axios";

function AddJob() {
  const { role } = useContext(AuthContext);

  const [jobtitle, setJobtitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobsData, setJobsData] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setJobtitle("");
    setDescription("");
    setImage("");
  };

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/jobs");
      setJobsData(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleApply=()=>{
    toast.success("Applied Successfull ! Thank You")
  }
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`);
      toast.success("Job Deleted Successfully");
      fetchJobs();
    } catch (error) {
      toast.error("Error deleting job:");
    }
  };

  const addJob = async () => {
    try {
      const newJob = {
        jobtitle,
        description,
        image,
      };

      await axios.post("http://localhost:5000/api/jobs", newJob);
      toast.success("Job Added successully");
      fetchJobs();
      closeModal();
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <div className="mx-3 lg:mx-28 py-3 flex justify-between">
        <div className="text-3xl text-orange-600">
          <Chip
            className="text-xl text-black"
            color="orange"
            value="placement"
          />
        </div>
        <div>
          {role === "Admin" && (
            <button
              className="px-3 bg-orange-600 text-white py-2 rounded"
              onClick={openModal}
            >
              Add Jobs
            </button>
          )}
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-4 lg:gap-7 lg:mx-24  mx-2 py-5">
        {jobsData.map((job, index) => (
          <Card className="mt-6 w-72">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={job.image} alt="card-imagee" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {job.jobtitle}
              </Typography>
              <Typography>{job.description}</Typography>
            </CardBody>
            <CardFooter className="pt-0 bottom-0">
              {role === "Student" && <Button onClick={handleApply}>Apply</Button>}
              {role === "Admin" && (
                <Button
                  className=" bg-red-600 opacity-90 rounded mx-1"
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-500">
          <div className="bg-white p-4 rounded w-96">
            <h2 className="text-2xl font-semibold mb-4">Add Job</h2>
            <input
              type="text"
              placeholder="job title"
              className="w-full p-2 mb-2 border rounded border-black"
              value={jobtitle}
              onChange={(e) => setJobtitle(e.target.value)}
            />
            <textarea
              rows={5}
              type="text"
              placeholder="job description"
              className="w-full p-2 mb-2 border rounded border-black"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="job image"
              className="w-full p-2 mb-2 border rounded border-black"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button
              className="px-3 py-2 bg-orange-500 text-white rounded"
              onClick={addJob}
            >
              Add Jobs
            </button>
            <button
              className="px-3 py-2 bg-gray-300 text-gray-700 ml-2 rounded"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddJob;
