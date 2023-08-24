import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Chip } from "@material-tailwind/react";

function StudentAttendance() {
  const { id } = useContext(AuthContext);
  const [attendanceDate, setAttendanceDate] = useState("");
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const getAttendance = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/studentattendance", {
          params: {
            id: id,
            date: attendanceDate,
          },
        });
        setAttendanceData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAttendance();
  }, [attendanceDate, id]);

  return (
    <div>
      <div>
        <div className="mx-3 lg:mx-28 py-3 flex justify-between">
        <Chip className="text-xl text-black" color="purple" value="Attendance" />

          <div className="text-purple-600">
            <input
              type="date"
              className="px-3 py-2 ml-3 rounded border border-black"
              value={attendanceDate}
              onChange={(e) => setAttendanceDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-x-auto mx-3 lg:mx-28 border h-[36rem] lg:h-[30rem] overflow-y-auto">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b text-xl font-medium bg-purple-600 text-white dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Sic
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((record, index) => (
                    <tr key={index} className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4">
                        {record.attendance[0]?.name}
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4">
                        {record.attendance[0]?.SIC}
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4">
                        {record.subject}
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4">
                        {record.attendance[0]?.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentAttendance;