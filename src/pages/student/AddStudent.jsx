// Signup.jsx
import React, { useState } from "react";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [section, setSection] = useState("");
  const [branch, setBranch] = useState("");
  const [SIC, setSIC] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          section,
          branch,
          SIC,
          phone,
          role: "student",
        }),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setPassword("");
        setSection("");
        setBranch("");
        setSIC("");
        setPhone("");
        alert("Student Added successful");
      } else {
        alert("Failed to add student. Please try again.");
      }
    } catch (error) {
      console.error("Error during adding:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="w-full bg-grey-lightest mt-8 ">
      <div className="container mx-auto py-8 ">
        <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow-2xl border-2">
          <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
            Add Student
          </div>
          <div className="py-4 px-8">
            <div className="flex mb-4">
              <div className="w-1/2 mr-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="first_name"
                >
                  Student Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="first_name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-1/2 ml-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="last_name"
                >
                  SIC
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="last_name"
                  type="text"
                  placeholder="Your Sic"
                  value={SIC}
                  onChange={(e) => setSIC(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="first_name"
                >
                  Demo Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="first_name"
                  type="number"
                  placeholder="Your Phone"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-1/2 ml-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="last_name"
                >
                  Branch
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="last_name"
                  type="text"
                  placeholder="Your Section"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="first_name"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="first_name"
                  type="number"
                  placeholder="Your Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="w-1/2 ml-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="last_name"
                >
                  Section
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="last_name"
                  type="text"
                  placeholder="Your Section"
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handleSignup}
                className="bg-sky-600  hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-lg "
                type="submit"
              >
                Add Student
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
