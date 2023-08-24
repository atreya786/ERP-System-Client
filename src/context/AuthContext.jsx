import React, { createContext, useEffect, useState } from "react"; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token") || "";
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const[name,setName]=useState("")
  const[subject,setSubject]=useState("")
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        setRole(decodedToken.user.role);
        setId(decodedToken.user.id);
        setName(decodedToken.user.name);
       
        if(decodedToken.user.role==="Staff"){

          setSubject(decodedToken.user.subject);
        }
      } catch (error) {
        console.error("Error decoding token:", error.message);
      }
    } else {
      console.log("JWT token not found in local storage or cookies");
    }
  },[token]);



  const navigate = useNavigate();
  const adminLogin = async (email, password) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        
        toast.success("Login successful");
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      
      toast.error("An error occurred. Please try again later.");
    }
  };

  const staffLogin = async (email, password) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/staff/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success("Login successful");
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const studentLogin = async (email, password) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/student/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        
        toast.success("Login successful");
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred. Please try again later."); 
    }
  };
  
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{ token, adminLogin, studentLogin, staffLogin, logout, role,id,name,subject }}
    >
      {children}
    </AuthContext.Provider>
  );
};
