import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext";
import { Chip } from "@material-tailwind/react";

import axios from "axios";

function Placement() {
  const { role } = useContext(AuthContext);

  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleEditClick = (index) => {
    setIsEditing((prevIsEditing) => ({ ...prevIsEditing, [index]: true }));
  };

  const handleSaveClick = async (ID, index) => {
    setIsEditing((prevIsEditing) => ({ ...prevIsEditing, [index]: false }));
    const updatedPlacement = data[index];

    try {
      // Update the state with the edited data
      setData((prevData) => {
        const updatedData = [...prevData];
        updatedData[index] = { ...updatedPlacement };
        return updatedData;
      });

      // Send the updated data to the backend
      await axios.patch(`http://localhost:5000/api/placement/${ID}`, {
        packageSal: updatedPlacement.packageSal,
        company: updatedPlacement.company,
      });

      toast.success("Updated Successfully");
    } catch (error) {
      toast.error("Error updating data");
    }
  };

  const handledataChange = (e, index) => {
    const { value } = e.target;
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index].packageSal = value;
      return updatedData;
    });
  };

  const handlePackageChange = (e, index) => {
    const { value } = e.target;
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index].company = value;
      return updatedData;
    });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/placement");
      setData(response.data);
    } catch (error) {
      toast.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((el) =>
    el.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <div className="mx-3 lg:mx-28 py-2 lg:flex lg:justify-between">
        <div className="text-3xl text-orange-500">
        <Chip className="text-xl text-black" color="orange" value="placement list" />
        </div>

        <div>
          <input
            type="text"
            placeholder="Search by Name"
            className="px-3 py-2 lg:my-0 my-2 border-black border  rounded focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col h-[36rem] overflow-x-auto mx-3 lg:mx-28 border lg:h-[30rem] lg:overflow-y-auto">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b text-xl font-medium bg-orange-600 text-white dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Sl No.
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      SIC
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Branch
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Company
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Package
                    </th>
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    filteredData.map((el, index) => {
                      return (
                        <tr
                          key={index + 1}
                          className="border-b dark:border-neutral-500"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {index + 1}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4">
                            {el.name}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4">
                            {el.SIC}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4">
                            {el.branch}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4">
                            {isEditing[index] ? (
                              <input
                                className="w-auto border py-1 rounded text-center border-black"
                                type="text"
                                value={el.company}
                                onChange={(e) => handlePackageChange(e, index)}
                              />
                            ) : (
                              <span>{el.company}</span>
                            )}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4">
                            {isEditing[index] ? (
                              <input
                                className="w-auto border py-1 rounded text-center border-black"
                                type="number"
                                value={el.packageSal}
                                onChange={(e) => handledataChange(e, index)}
                              />
                            ) : (
                              <span>{el.packageSal}</span>
                            )}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4">
                            <div className="flex">
                              {role === "Admin" && (
                                <div>
                                  {isEditing[index] ? (
                                    <button
                                      onClick={() =>
                                        handleSaveClick(el._id, index)
                                      }
                                      className="px-3 bg-green-500 text-white py-2 rounded"
                                    >
                                      Save
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => handleEditClick(index)}
                                      className="px-3 bg-black text-white py-2 rounded"
                                    >
                                      Add Data
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>
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

export default Placement;
