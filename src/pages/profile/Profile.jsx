import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const { role, id } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/${id}`
        );
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/user/${id}`, profileData);
      // setEditMode(false);
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  return (
    <div>
      <div className="text-3xl lg:mx-52 mx-4 py-2  lg:py-2">
        <span className="font-bold">| </span>Profile
      </div>
      <hr />
      <div className="rounded-lg bg-green-500 lg:mx-52 mx-3 my-3 lg:my-4">
        <div className="lg:flex py-5 border">
          <div>
            <img
              className="h-52 mx-20 lg:mx-40 my-2 rounded-full mix-blend-darken"
              src="https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png"
              alt="error"
            />
            <div className=" invisible lg:visible lg:border-black lg:rounded lg:border lg:px-3 lg:py-3 text-justify  lg:w-96 lg:mx-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              dolorum perferendis quam alias omnis nisi nostrum asperiores harum
              totam voluptatibus iure nesciunt sequi incidunt distinctio, est
              debitis?sequi incidunt distinctio .
            </div>
          </div>
          {profileData ? (
            <div className=" border-t-4 lg:border-t-0 lg:border-l-8 border-black space-y-2 ">
              <div className=" text-3xl lg:text-4xl font-bold lg:ml-12 border-b-4 lg:px-0 px-7 py-2 lg:py-1 text-white">
                {profileData.name}
              </div>
              <div className="text-xl ml-7 lg:ml-12">
                <span className="font-bold">Email : </span> {profileData.email}{" "}
              </div>
              <div className="text-xl ml-7 lg:ml-12">
                <span className="font-bold">Phone : </span>
                {profileData.phone}{" "}
              </div>
              <div className="text-xl  ml-7 lg:ml-12">
                <span className="font-bold">Role : </span> {role}{" "}
              </div>
              {role === "staff" ? (
                <div className="text-xl  ml-7 lg:ml-12">
                  <span className="font-bold">SID : </span> {profileData.SID}{" "}
                </div>
              ) : (
                ""
              )}
              {role === "admin" ? (
                <div className="text-xl  ml-7 lg:ml-12">
                  <span className="font-bold">AID : </span> {profileData.AID}{" "}
                </div>
              ) : (
                ""
              )}
              {role === "student" ? (
                <>
                  <div className="text-xl  ml-7 lg:ml-12">
                    <span className="font-bold">SIC : </span> {profileData.SIC}{" "}
                  </div>
                  <div className="text-xl  ml-7 lg:ml-12">
                    <span className="font-bold">Branch : </span>{" "}
                    {profileData.branch}{" "}
                  </div>
                  <div className="text-xl  ml-7 lg:ml-12">
                    <span className="font-bold">Section : </span>{" "}
                    {profileData.section}
                  </div>
                </>
              ) : (
                ""
              )}
              {role === "staff" ? (
                <div className="text-xl  ml-7 lg:ml-12">
                  <span className="font-bold">Subject : </span>{" "}
                  {profileData.subject}
                </div>
              ) : (
                ""
              )}
              <button
                onClick={() => {
                  setEditMode(true);
                }}
                className="lg:ml-12 ml-7 font-semibold px-5 py-2 bg-black
                text-white rounded-lg my-3"
              >
                {" "}
                Edit
              </button>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>

      {editMode && profileData && (
        <div className="bg-gray-200 px-4 py-3">
          <h3 className="text-lg font-semibold mb-2">Edit Profile</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                SID
              </label>
              <input
                type="text"
                name="SID"
                value={profileData.SID}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                SIC
              </label>
              <input
                type="text"
                name="SIC"
                value={profileData.SIC}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Branch
              </label>
              <input
                type="text"
                name="branch"
                value={profileData.branch}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Section
              </label>
              <input
                type="text"
                name="section"
                value={profileData.section}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={profileData.subject}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="text-center">
              <button
                className="font-semibold px-5 py-2 bg-black text-white rounded-lg"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Profile;
