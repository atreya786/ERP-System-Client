import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Account() {
  const [accountData, setAccountData] = useState(null);
  const [accountsData, setAccountsData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedAmount, setUpdatedAmount] = useState(0);
  const { id, role } = useContext(AuthContext);

  const fetchAccountData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/account/${id}`
      );
      setAccountData(response.data);
    } catch (error) {
      console.error("Error fetching account data:", error);
    }
  };
  const fetchAccountsData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/account`);
      setAccountsData(response.data);
    } catch (error) {
      console.error("Error fetching account data:", error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleDeleteClick = () => {};

  useEffect(() => {
    fetchAccountData();
    fetchAccountsData();
  }, [id]);

  const handleSaveClick = async () => {
    try {
      await axios.patch(`http://localhost:5000/api/account/${id}`, {
        amount: accountData.amount - updatedAmount,
      });
      alert("Paid Successfully");
      setIsEditing(false);
      fetchAccountData();
    } catch (error) {
      console.error("Error updating account data:", error);
    }
  };

  const handleAmountChange = (e) => {
    setUpdatedAmount(e.target.value);
  };

  return (
    <div>
      <div className="mx-3 lg:mx-28 py-3 flex justify-between">
        <div className="text-3xl text-teal-500">
          <span className="font-bold">| </span>Account
        </div>
      </div>
      <div className="flex flex-col overflow-x-auto mx-3 lg:mx-28 border">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b text-xl font-medium bg-teal-500 text-white dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-center">
                      Sl No.
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      SIC
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Dues
                    </th>
                    <th scope="col" className="px-6 py-4 text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  {role === "Student" && accountData ? (
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 text-center font-medium">
                        1
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                        {accountData.name}
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                        {accountData.SIC}
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                        {accountData.phone}
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                        {isEditing ? (
                          <input
                            className="w-16 border py-1 rounded text-center border-black"
                            type="number"
                            value={updatedAmount}
                            onChange={handleAmountChange}
                          />
                        ) : (
                          <span>{accountData.dues}</span>
                        )}
                      </td>
                      <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                        <div className="flex">
                          <div>
                            {isEditing ? (
                              <button
                                onClick={handleSaveClick}
                                className="px-3 bg-green-500 text-white py-2 rounded"
                              >
                                Pay
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
                  ) : (
                    ""
                  )}

                  {role === "Admin" && accountsData ? (
                    accountsData.map((account, index) => (
                      <tr
                        key={index + 1}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="whitespace-nowrap px-6 py-4 text-center font-medium">
                          {index + 1}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {account.name}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {account.SIC}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {account.phone}
                        </td>
                        <td className="font-semibold whitespace-nowrap px-6 py-4 text-center">
                          {account.dues}
                        </td>
                        
                      </tr>
                    ))
                  ) : (
                    ""
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
