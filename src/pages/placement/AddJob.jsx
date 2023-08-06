import React, { useState, useEffect } from "react";
import axios from "axios";

function AddJob() {
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

  const addJob = async () => {
    try {
      const newJob = {
        jobtitle,
        description,
        image,
      };

      await axios.post("http://localhost:5000/api/jobs", newJob);
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
          <span className="font-bold">| </span>Placement
        </div>
        <div>
          <button
            className="px-3 bg-orange-600 text-white py-2 rounded"
            onClick={openModal}
          >
            Add Jobs
          </button>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-4 lg:gap-7 lg:mx-28 mx-2 py-5">
        {jobsData.map((job, index) => (
          <div
            key={index}
            className="block rounded-lg bg-orange-600 text-white"
          >
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              <img className="rounded-t-lg" src={job.image} alt="" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {job.jobtitle}
              </h5>
              <hr />
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {job.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-500">
          <div className="bg-white p-4 rounded w-96">
            <h2 className="text-2xl font-semibold mb-4">Add Job</h2>
            <input
              type="text"
              placeholder="job title"
              className="w-full p-2 mb-2 border rounded"
              value={jobtitle}
              onChange={(e) => setJobtitle(e.target.value)}
            />
            <textarea
              rows={5}
              type="text"
              placeholder="job description"
              className="w-full p-2 mb-2 border rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="job image"
              className="w-full p-2 mb-2 border rounded"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button
              className="px-3 py-2 bg-amber-500 text-white rounded"
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
