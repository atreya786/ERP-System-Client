import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Library() {
  const [book, setBook] = useState("");
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [issuedate, setIssuedate] = useState("");
  const [returndate, setReturndate] = useState("");
  const { id } = useContext(AuthContext);
  const [editRowId, setEditRowId] = useState(null);

  const handleEditClick = (index) => {
    setIsEditing(true);
    setEditRowId(index);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    setEditRowId(null);
    await updateData();
  };

  const handleBookChange = (e) => {
    setBook(e.target.value);
  };

  const handleIssueDateChange = (e) => {
    setIssuedate(e.target.value);
  };

  const handleReturnDateChange = (e) => {
    setReturndate(e.target.value);
  };

  const calculateFine = () => {
    const oneDay = 24 * 60 * 60 * 1000;
    const issueDateObj = new Date(issuedate);
    const returnDateObj = new Date(returndate);
    const gapDays = Math.round(
      Math.abs((returnDateObj - issueDateObj) / oneDay)
    );

    if (gapDays > 30) {
      return 50;
    } else {
      return 0;
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/library");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateData = async (SIC) => {
    try {
      // Find the data to update
      const selectedData = data[editRowId];

      // Create a new object with updated fields
      const updatedData = {
        ...selectedData,
        book,
        issueDate: issuedate,
        returnDate: returndate,
      };

      // Make a PATCH request to update the data
      await axios.patch(`http://localhost:5000/api/library/${SIC}`, updatedData);
      fetchData();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      <div className="mx-3 lg:mx-28 py-3 flex justify-between">
        <div className="text-3xl text-yellow-600">
          <span className="font-bold">| </span>Library
        </div>
      </div>
      <div className="flex flex-col overflow-x-auto mx-3 lg:mx-28 border">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b text-xl font-medium bg-yellow-600 text-white dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-center">
                      Sl No.
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Sic
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Books
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Issue date
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Return date
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Fine
                    </th>
                    <th scope="col" className="px-6 py-4 text-center"></th>
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
                          <td className="whitespace-nowrap px-6 py-4 text-center font-medium">
                            {index + 1}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                            {el.name}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                            {el.SIC}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                            {el.phone}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                            {isEditing ? (
                              <input
                                className="w-auto border py-1 rounded text-center border-black"
                                type="text"
                                value={book}
                                onChange={handleBookChange}
                              />
                            ) : (
                              <span>{el.book}</span>
                            )}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                            {isEditing ? (
                              <input
                                className="w-auto border py-1 rounded text-center border-black"
                                type="date"
                                value={issuedate}
                                onChange={handleIssueDateChange}
                              />
                            ) : (
                              <span>{el.issueDate}</span>
                            )}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                            {isEditing ? (
                              <input
                                className="w-auto border py-1 rounded text-center border-black"
                                type="date"
                                value={returndate}
                                onChange={handleReturnDateChange}
                              />
                            ) : (
                              <span>{el.returnDate}</span>
                            )}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                            {calculateFine()}
                          </td>
                          <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                            <div className="flex">
                              <div>
                                {isEditing ? (
                                  <button
                                    onClick={()=>handleSaveClick(el.SIC)}
                                    className="px-3 bg-green-500 text-white py-2 rounded"
                                  >
                                    Save
                                  </button>
                                ) : (
                                  <button
                                    onClick={handleEditClick}
                                    className="px-3 bg-zinc-800 text-white py-2 rounded"
                                  >
                                    Edit
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

export default Library;
