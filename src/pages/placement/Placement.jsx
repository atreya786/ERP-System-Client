import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

function Placement() {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState({});

  const handleEditClick = (index) => {
    setIsEditing((prevIsEditing) => ({ ...prevIsEditing, [index]: true }));
  };

  const handleSaveClick = async (SIC,index) => {
    setIsEditing((prevIsEditing) => ({ ...prevIsEditing, [index]: false }));

    const updatedPlacement = data[index];
    try {
      // Make a PATCH request to update the data
      await axios.patch(`http://localhost:5000/api/placement/${SIC}`, {
        packageSal: updatedPlacement.packageSal,
        company: updatedPlacement.company,
      });
      alert("Updated Successfully");
      fetchData();
    } catch (error) {
      alert("Error updating data");
      console.error("Error updating data:", error);
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
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-col overflow-x-auto mx-3 lg:mx-28 border">
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
                    data.map((el, index) => {
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
                              <div>
                                {isEditing[index] ? (
                                  <button
                                    onClick={() => handleSaveClick(el.SIC,index)}
                                    className="px-3 bg-green-500 text-white py-2 rounded"
                                  >
                                    Save
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => handleEditClick(index)}
                                    className="px-3 bg-zinc-800 text-white py-2 rounded"
                                  >
                                    Add Data
                                  </button>
                                )}
                              </div>
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
