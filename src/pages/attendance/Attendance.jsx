// src/components/Attendance.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function Attendance() {
  const [attendanceDate, setAttendanceDate] = useState("");
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [attendanceRecords, setAttendanceRecords] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Fetch students data from the backend
  useEffect(() => {
    fetchStudents();
    fetchAttendance();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };
  const fetchAttendance = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/attendance");
      setAttendance(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Filter out students with undefined attendance status (not selected)
      const filteredAttendanceRecords = Object.entries(
        attendanceRecords
      ).reduce((acc, [studentId, attendanceStatus]) => {
        if (attendanceStatus !== undefined) {
          const { name, SIC } = students.find(
            (student) => student._id === studentId
          );
          acc.push({
            id: studentId,
            name,
            SIC,
            status: attendanceStatus,
          });
        }
        return acc;
      }, []);

      // Prepare data to send to the backend
      const data = {
        subject: "Math",
        date: attendanceDate,
        attendance: filteredAttendanceRecords,
      };

      // Make a POST request to save attendance records
      await axios.post("http://localhost:5000/api/attendance", data);

      // Reset form state
      setIsFormOpen(false);
      setAttendanceDate("");
      setAttendanceRecords({});
      // setSelectedSubject("");
      alert("Attendance added successfully");
    } catch (error) {
      console.error("Error saving attendance:", error);
    }
  };

  return (
    <div>
      <div className="mx-3 lg:mx-28 py-3 flex justify-between">
        <div className="text-3xl text-sky-600">
          <span className="font-bold">|</span>Attendance
        </div>
        <div>
          <button
            className="px-3 bg-zinc-800 text-white py-2 rounded"
            onClick={() => setIsFormOpen(true)}
          >
            Add Attendance
          </button>
        </div>
      </div>
      <div className="flex flex-col overflow-x-auto mx-3 lg:mx-28 border">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-sky-600 text-white font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      SIC
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attendance.map((record) =>
                    record.attendance.map((el) => {
                      return (
                        <tr
                          key={el.id}
                          className="border-b dark:border-neutral-500"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {el.name}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4">
                            {el.SIC}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4">
                            {el.status}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-500">
          <div className="bg-white p-4 rounded w-96">
            <h2 className="text-2xl font-semibold mb-4">Add Attendance</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="date"
                placeholder="Attendance Date"
                className="w-full p-2 mb-2 border rounded"
                value={attendanceDate}
                onChange={(e) => setAttendanceDate(e.target.value)}
                required
              />
              <table className="w-full text-left text-sm font-light">
                <tbody>
                  {students.map((student) => (
                    <tr
                      key={student._id}
                      className="border-b dark:border-neutral-500"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {student.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name={`attendance_${student._id}`}
                            value="Present"
                            onChange={(e) =>
                              setAttendanceRecords({
                                ...attendanceRecords,
                                [student._id]: e.target.value,
                              })
                            }
                            checked={
                              attendanceRecords[student._id] === "Present"
                            }
                          />
                          <label htmlFor={`present_${student._id}`}>
                            Present
                          </label>
                          <input
                            type="radio"
                            name={`attendance_${student._id}`}
                            value="Absent"
                            onChange={(e) =>
                              setAttendanceRecords({
                                ...attendanceRecords,
                                [student._id]: e.target.value,
                              })
                            }
                            checked={
                              attendanceRecords[student._id] === "Absent"
                            }
                          />
                          <label htmlFor={`absent_${student._id}`}>
                            Absent
                          </label>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-300 text-gray-700 ml-2 rounded"
                  onClick={() => setIsFormOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-2 bg-amber-500 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Attendance;
