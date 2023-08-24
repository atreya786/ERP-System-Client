// src/components/Attendance.js
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Select, Option } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";

function Attendance() {
  const { role, id } = useContext(AuthContext);
  const [attendanceDate, setAttendanceDate] = useState("");
  const [staff, setStaff] = useState("");
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [attendanceRecords, setAttendanceRecords] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchSubject, setSearchSubject] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [filteredAttendance, setFilteredAttendance] = useState([]);

  const getStaff = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/staff/${id}`);
      setStaff(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
    fetchAttendance();
    handleSearch(); // Apply search filters on component mount
  }, []);

  useEffect(() => {
    if (role === "Staff") getStaff();
  }, [role]);

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
      console.error("Error fetching attendance:", error);
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

      getStaff();
      // Prepare data to send to the backend
      const data = {
        subject: staff.subject,
        date: attendanceDate,
        attendance: filteredAttendanceRecords,
      };

      // Make a POST request to save attendance records
      await axios.post("http://localhost:5000/api/attendance", data);

      // Reset form state
      setIsFormOpen(false);
      setAttendanceDate("");
      setAttendanceRecords({});
      alert("Attendance added successfully");
    } catch (error) {
      console.error("Error saving attendance:", error);
    }
  };

  const handleSearch = () => {
    const filteredBySubject = attendance.filter((record) =>
      record.subject.toLowerCase().includes(searchSubject.toLowerCase())
    );

    const filteredByDate = filteredBySubject.filter(
      (record) => record.date === searchDate
    );

    setFilteredAttendance(filteredByDate);
  };

  return (
    <div>
      <div className="mx-3 lg:mx-28 py-3 lg:flex lg:justify-between">
        <div className="lg:flex">
          <div>
            <Chip
              className="text-xl mx-1 text-black"
              color="purple"
              value="Attendance"
            />
          </div>
          <div className="lg:flex lg:my-0 my-2">
            <Select
              label="Select Subject"
              value={searchSubject}
              onChange={(e) => {
                setSearchSubject(e);
              }}
            >
              <Option value="Math">Math</Option>
              <Option value="English">English</Option>
              <Option value="Biology">Biology</Option>
              <Option value="Physics">Physics</Option>
              <Option value="Chemistry">Chemistry</Option>
            </Select>

            <input
              type="date"
              className="py-2 lg:my-0 my-2 lg:ml-3 rounded border border-black w-full"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
            />
            <button
              className="px-3  bg-blue-600 text-white py-2 lg:ml-3 rounded"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        {role === "Staff" && (
          <button
            className="px-3 bg-black text-white py-2 rounded"
            onClick={() => setIsFormOpen(true)}
          >
            Add Attendance
          </button>
        )}
      </div>
      <div className="flex flex-col overflow-x-auto mx-3 h-[30rem] lg:mx-28 border lg:h-[30rem] overflow-y-auto">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-blue-600 text-white font-medium">
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
                  {filteredAttendance.map((record) =>
                    record.attendance.map((el) => {
                      return (
                        <tr key={el.id} className="border-b">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {el.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {el.SIC}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
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
        <div className="fixed inset-2  flex items-center justify-center  z-50 bg-opacity-80 ">
          <div className="bg-white py-3 rounded w-[82rem] border border-black overflow-x-auto h-[36rem] overflow-y-auto">
            <form onSubmit={handleFormSubmit}>
              <input
                type="date"
                placeholder="Attendance Date"
                className="w-52 px-3 mx-5 p-2 mb-2 border rounded"
                value={attendanceDate}
                onChange={(e) => setAttendanceDate(e.target.value)}
                required
              />
              <table className="w-full text-left text-sm font-light ">
                <tbody>
                  {students.map((student) => (
                    <tr key={student._id} className="border-b">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-lg">
                        {student.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center space-x-3 text-lg ">
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
                  className="px-3 py-2 bg-gray-300 text-gray-700 ml-2 rounded mx-2"
                  onClick={() => setIsFormOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-2 bg-blue-500 text-white rounded"
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
