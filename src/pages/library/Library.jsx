import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Chip } from "@material-tailwind/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Library() {
  const [data, setData] = useState([]);
  const [singledata, setSingleData] = useState({});
  const { role, id } = useContext(AuthContext);
  const [editRowId, setEditRowId] = useState(null);
  const [editBook, setEditBook] = useState("");
  const [editIssueDate, setEditIssueDate] = useState("");
  const [editReturnDate, setEditReturnDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleEditClick = (index) => {
    setEditRowId(index);
    setEditBook(data[index].book);
    setEditIssueDate(data[index].issueDate);
    setEditReturnDate(data[index].returnDate);
  };

  const handleSaveClick = async (ID) => {
    setEditRowId(null);
    await updateData(ID);
  };

  const handleBookChange = (e) => {
    setEditBook(e.target.value);
  };

  const handleIssueDateChange = (e) => {
    setEditIssueDate(e.target.value);
  };

  const handleReturnDateChange = (e) => {
    setEditReturnDate(e.target.value);
  };

  const calculateFine = (issueDate, returnDate) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const issueDateObj = new Date(issueDate);
    const returnDateObj = new Date(returnDate);
    const gapDays = Math.round(Math.abs((returnDateObj - issueDateObj) / oneDay));

    if (gapDays > 30) {
      return 50;
    } else {
      return 0;
    }
  };

  const fetchLibraryData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/library/${id}`);
      setSingleData(response.data);
    } catch (error) {
      console.error("Error fetching library data:", error);
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

  const updateData = async (ID) => {
    try {
      const updatedData = {
        book: editBook,
        issueDate: editIssueDate,
        returnDate: editReturnDate,
      };

      await axios.patch(`http://localhost:5000/api/library/${ID}`, updatedData);
      fetchData();
      toast.success("update successful");
    } catch (error) {
      toast.error("Error updating data:", error);
    }
  };

  useEffect(() => {
    if (role === "Admin"||role === "Staff") {
      fetchData();
    }
  }, [role]);
  
  useEffect(() => {
    if (role === "Student") {
      fetchLibraryData();
    }
  }, [id, role]);

  const filteredData = data.filter((el) =>
    el.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mx-3 lg:mx-28 py-3 flex justify-between">
        <div className="text-3xl">
        <Chip className="text-xl text-black" color="blue" value="library" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search by Name"
            className="px-3 py-2 border rounded focus:outline-none focus:border-blue-500 border-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {(role === "Admin" || role === "Staff") && (
        <div className="flex flex-col h-[36rem] overflow-x-auto mx-3 lg:mx-28 border lg:h-[30rem] overflow-y-auto">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b text-xl font-medium bg-blue-800 text-white dark:border-neutral-500">
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
                      filteredData.map((el, index) => {
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
                              {editRowId === index ? (
                                <input
                                  className="w-auto border py-1 rounded text-center border-black"
                                  type="text"
                                  value={editBook}
                                  onChange={handleBookChange}
                                />
                              ) : (
                                <span>{el.book}</span>
                              )}
                            </td>
                            <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                              {editRowId === index ? (
                                <input
                                  className="w-auto border py-1 rounded text-center border-black"
                                  type="date"
                                  value={editIssueDate}
                                  onChange={handleIssueDateChange}
                                />
                              ) : (
                                <span>{el.issueDate}</span>
                              )}
                            </td>
                            <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                              {editRowId === index ? (
                                <input
                                  className="w-auto border py-1 rounded text-center border-black"
                                  type="date"
                                  value={editReturnDate}
                                  onChange={handleReturnDateChange}
                                />
                              ) : (
                                <span>{el.returnDate}</span>
                              )}
                            </td>
                            <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                              {calculateFine(el.issueDate, el.returnDate)}
                            </td>
                            <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                              <div className="flex">
                                {role === "Admin" && (
                                  <div>
                                    {editRowId === index ? (
                                      <button
                                        onClick={(e) =>
                                          handleSaveClick(el._id)
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
                                        Edit
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
      )}
      {role === "Student" && (
        <div className="flex flex-col overflow-x-auto h-[36rem] mx-3 lg:mx-28 border-4 lg:h-[30rem] overflow-y-auto">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b text-xl font-medium bg-blue-700 text-white dark:border-neutral-500">
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
                    {singledata && (
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 text-center font-medium">
                          1
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {singledata.name}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {singledata.SIC}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {singledata.phone}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {editRowId === 0 ? (
                            <input
                              className="w-auto border py-1 rounded text-center border-black"
                              type="text"
                              value={editBook}
                              onChange={handleBookChange}
                            />
                          ) : (
                            <span>{singledata.book}</span>
                          )}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {editRowId === 0 ? (
                            <input
                              className="w-auto border py-1 rounded text-center border-black"
                              type="date"
                              value={editIssueDate}
                              onChange={handleIssueDateChange}
                            />
                          ) : (
                            <span>{singledata.issueDate}</span>
                          )}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {editRowId === 0 ? (
                            <input
                              className="w-auto border py-1 rounded text-center border-black"
                              type="date"
                              value={editReturnDate}
                              onChange={handleReturnDateChange}
                            />
                          ) : (
                            <span>{singledata.returnDate}</span>
                          )}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {calculateFine(
                            singledata.issueDate,
                            singledata.returnDate
                          )}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {role === "Admin" && (
                            <div>
                              {editRowId === 0 ? (
                                <button
                                  onClick={(e) => handleSaveClick(singledata._id)}
                                  className="px-3 bg-green-500 text-white py-2 rounded"
                                >
                                  Save
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleEditClick(0)}
                                  className="px-3 bg-zinc-800 text-white py-2 rounded"
                                >
                                  Edit
                                </button>
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Library;