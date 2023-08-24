import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Chip } from "@material-tailwind/react";

function Staff() {
  const { role } = useContext(AuthContext);

  const [staffs, setStaffs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/staffs");
        setStaffs(response.data);
      } catch (error) {
        console.error("Error fetching staffs:", error);
      }
    };

    fetchStaffs();
  }, []);

  const handleDeleteStaff = async (SID) => {
    try {
      await axios.delete(`http://localhost:5000/api/staffs/${SID}`);
      setStaffs((prevStaffs) =>
        prevStaffs.filter((staff) => staff.SID !== SID)
      );
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  const filteredStaffs = staffs.filter((staff) =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mx-3 lg:mx-28 py-3 lg:flex lg:justify-between">
        <div className="text-3xl text-orange-500">
        <Chip className="text-xl" color="orange" value="staff list" />
        </div>
        <div className="flex">
          <div>
            <input
              type="text"
              placeholder="Search by Name"
              className="px-3 py-2 lg:my-0 my-2 border rounded focus:outline-none  text-black border-black focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="py-2 mx-2 lg:my-0 my-2">
            {role === "Admin" && (
              <a
                href="/addStaffs"
                className="px-3 bg-orange-500 text-white py-2 rounded"
              >
                Add Staffs
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col  overflow-x-auto mx-3 lg:mx-28 border h-[35rem] lg:h-[40rem]">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b text-xl font-medium bg-orange-500 text-white dark:border-neutral-500">
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
                      SID
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Salary
                    </th>
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStaffs.map((el, index) => {
                    return (
                      <tr
                        key={index}
                        className="border-b dark:border-neutral-500 border-black"
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
                          {el.SID}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {el.subject}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {el.salary}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {role === "Admin" && (
                            <button
                              className="px-2 mx-2 rounded py-1 bg-red-600 text-white hover:bg-red-700"
                              onClick={() => handleDeleteStaff(el.SID)}
                            >
                              Delete
                            </button>
                          )}
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

export default Staff;
