// Signup.jsx
import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [section, setSection] = useState("");
  const [branch, setBranch] = useState("");
  const [SIC, setSIC] = useState("");
  const [phone, setPhone] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
    return emailPattern.test(email);
  };

  const validateSIC = (sic) => {
    const sicPattern = /^[^\s]{8}$/; 
    return sicPattern.test(sic);
  };
  const validatePhoneNumber = (phoneNumber) => {

    const phonePattern = /^\d{10}$/; 
    return phonePattern.test(phoneNumber);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };
  const validateName = (name) => {
    const namePattern = /^[A-Za-z\s]+$/; 
    return namePattern.test(name);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Invalid email format. Please enter a valid email.");
      return;
    }

    if (!validateSIC(SIC)) {
      toast.error("SIC must be 8 characters long.");
      return;
    }
    
    if (!validateName(name)) {
      toast.error("Invalid name format. Please enter a valid name.");
      return;
    }


    if (!validatePassword(password)) {
      toast.error("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 special character, and be 8 characters long.");
      return;
    }
    if (!validatePhoneNumber(phone)) {
      toast.error("Invalid phone number format. Please enter a 10-digit phone number.");
      return;
    }

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
          role: "Student",
          dues: 150000,
          packageSal: 0,
          issueDate: "null",
          returnDate: "null",
          company: "null",
          book: "null",
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
        toast.success("Student Added successfully");
      } else {
        toast.error("Failed to add student. Please try again.");
      }
    } catch (error) {
      console.error("Error during adding:", error);
      toast.error("An error occurred. Please try again later.");
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
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black"
                  id="first_name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
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
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black"
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
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black"
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
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black"
                  id="first_name"
                  type="password"
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
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black"
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
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black"
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
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black"
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
                className="bg-black  text-white font-bold py-2 px-4 rounded-lg "
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
