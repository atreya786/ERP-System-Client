// Signup.jsx
import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddStaffs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [SID, setSID] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/staffs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          subject,
          SID,
          phone,
          role: "Staff",
          salary,
        }),
      });
  
      if (response.ok) {
        setName("");
        setEmail("");
        setPassword("");
        setSubject("");
        setSID("");
        setPhone("");
        setSalary("")
        toast.success("Staff Added successfully"); 
      } else {
        toast.error("Failed to add staff. Please try again."); 
      }
    } catch (error) {
      console.error("Error during adding:", error);
      toast.error("An error occurred. Please try again later."); 
    }
  };
  

  return (
    <div className="w-full bg-grey-lightest mt-8 ">
      <div className="container mx-auto lg:py-8 py-14 ">
        <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow-2xl border-2">
          <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
            Add Staff
          </div>
          <div className="py-4 px-8">
            <div className="flex mb-4">
              <div className="w-1/2 mr-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="first_name"
                >
                  Staff Name
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
                  SID
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="last_name"
                  type="text"
                  placeholder="Your SID"
                  value={SID}
                  onChange={(e) => setSID(e.target.value)}
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
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="first_name"
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div className="w-1/2 ml-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="last_name"
                >
                  Subject
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="last_name"
                  type="text"
                  placeholder="Subject Name"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
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
              <div className="w-1/2 mr-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="salary"
                >
                  Salary
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="first_namesalary"
                  type="number"
                  placeholder="Salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handleSignup}
                className="bg-orange-600  hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-lg "
                type="submit"
              >
                Add Staff
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStaffs;
