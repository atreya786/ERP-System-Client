import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext";
import { Chip } from "@material-tailwind/react";

import axios from "axios";

function Examination() {
  const { role,subject } = useContext(AuthContext);

  const [exams, setExams] = useState([]);
  const [date, setDate] = useState("");
  // const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const [examname, setExamname] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchExams = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/exams");
      setExams(response.data);
    } catch (error) {
      toast.error("Error fetching exams:", error);
    }
  };

  const handleAddExam = async () => {
    try {
      const newExamData = {
        examname,
        date,
        time,
        subject:subject,
      };

      await axios.post("http://localhost:5000/api/exams", newExamData);
      closeModal();
      toast.success("Exam Added Successfully");
      fetchExams();
    } catch (error) {
      toast.error("Error adding exam:", error);
    }
  };

  const handleDeleteExam = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/exams/${id}`);
      toast.success("Exam Deleted Successfully");
      fetchExams();
    } catch (error) {
      toast.error("Error deleting exam:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setExamname("");
    setDate("");
    setTime("");
    // setSubject("");
  };

  useEffect(() => {
    fetchExams();
  }, []);

  return (
    <div>
      <div className="mx-2 lg:mx-28 py-3 flex justify-between">
        <div className="text-3xl text-deep-purple-600">
        <Chip className="text-xl" color="deep-purple" value="examination" />
        </div>
        {role==="Staff"&& (
          <div>
            <button
              className="px-3 bg-black text-white py-2 rounded"
              onClick={openModal}
            >
              Add Exams
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col overflow-x-auto mx-2 h-[36rem] lg:mx-28 border lg:h-[30rem] lg:overflow-y-auto">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-deep-purple-600 text-white font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Sl No.
                    </th>
                    
                    <th scope="col" className="px-6 py-4">
                      Examname
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Time
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {exams.map((exam, index) => (
                    <tr
                      key={index}
                      className="border-b dark:border-neutral-500"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      
                      <td className="font-semibold whitespace-nowrap px-6 py-4">
                        {exam.examname}
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4">
                        {exam.date}
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4">
                        {exam.time}
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4">
                        {exam.subject}
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4">
                        {(role === "Staff" ||role==="Admin") && (
                          <button
                            className="px-2 mx-2 rounded py-1 bg-red-600 text-white hover:bg-red-700"
                            onClick={() => handleDeleteExam(exam._id)}
                          >
                            Delete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-80 bg-black">
          <div className="bg-white p-4 rounded w-96">
            <h2 className="text-2xl font-semibold mb-4">Add Exam</h2>
            <input
              type="text"
              placeholder="Examname"
              className="w-full p-2 mb-2 border rounded border-black"
              value={examname}
              onChange={(e) => setExamname(e.target.value)}
            />
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              className="w-full p-2 mb-2 border rounded border-black"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              placeholder="00-00-am/pm"
              className="w-full p-2 mb-2 border rounded border-black"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
             {/* <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 mb-2 border rounded border-black"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            /> */}
            
            <button
              className="px-3 py-2 bg-deep-purple-500 text-white rounded"
              onClick={handleAddExam}
            >
              Add Exam
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

export default Examination;
