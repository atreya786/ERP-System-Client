import React, { useState, useEffect } from "react";
import axios from "axios";

function Examination() {
  const [exams, setExams] = useState([]);
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchExams = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/exams");
      setExams(response.data);
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  const handleAddExam = async () => {
    try {
      const newExamData = {
        date,
        subject,
      };

      await axios.post("http://localhost:5000/api/exams", newExamData);
      closeModal();
      alert("Exam Added Successfully")
      fetchExams();
    } catch (error) {
      console.error("Error adding exam:", error);
    }
  };

  const handleDeleteExam = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/exams/${id}`);
      alert("Exam Deleted Successfully")
      fetchExams();
    } catch (error) {
      console.error("Error deleting exam:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDate("");
    setSubject("");
  };

  useEffect(() => {
    fetchExams();
  }, []);

  return (
    <div>
      <div className="mx-2 lg:mx-28 py-3 flex justify-between">
        <div className="text-3xl text-sky-600">
          <span className="font-bold">|</span>Examination
        </div>
        <div>
          <button
            className="px-3 bg-zinc-800 text-white py-2 rounded"
            onClick={openModal}
          >
            Add Exams
          </button>
        </div>
      </div>
      <div className="flex flex-col overflow-x-auto mx-2 lg:mx-28 border">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-sky-600 text-white font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Sl No.
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Date
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
                        {exam.date}
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4">
                        {exam.subject}
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4">
                        <button
                          className="px-2 mx-2 rounded py-1 bg-red-600 text-white hover:bg-red-700"
                          onClick={() => handleDeleteExam(exam._id)}
                        >
                          Delete
                        </button>
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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-500">
          <div className="bg-white p-4 rounded w-96">
            <h2 className="text-2xl font-semibold mb-4">Add Exam</h2>

            <input
              type="date"
              placeholder="Date"
              className="w-full p-2 mb-2 border rounded"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 mb-2 border rounded"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <button
              className="px-3 py-2 bg-amber-500 text-white rounded"
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
