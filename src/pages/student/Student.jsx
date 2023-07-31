import React, { useEffect, useState } from "react";
import axios from "axios";

function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleDeleteStudent = async (SIC) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/students/${SIC}`
      );
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.SIC !== SIC)
      );
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div>
      <div className="mx-3 lg:mx-28 py-3 flex justify-between">
        <div className="text-3xl text-red-500">
          <span className="font-bold">| </span>Student List
        </div>
        <div>
          <a
            href="/addStudent"
            className="px-3 bg-red-500 text-white py-2 rounded"
          >
            Add Students
          </a>
        </div>
      </div>
      <div className="flex flex-col overflow-x-auto mx-3 lg:mx-28 border">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b  text-xl font-medium bg-red-500 text-white dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-center">
                      Sl No.
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      SIC
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Branch
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Section
                    </th>
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((el, index) => {
                    return (
                      <tr
                        key={index}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {index + 1}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {el.name}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {el.email}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {el.SIC}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {el.branch}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {el.section}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          <button
                            className="px-2 mx-2 rounded py-1 bg-red-600 text-white hover:bg-red-700"
                            onClick={() => handleDeleteStudent(el.SIC)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
