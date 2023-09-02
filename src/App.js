import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./pages/admin/Login";
import Signup from "./pages/signup/Signup";
import StaffLogin from "./pages/staff/Login";
import StudentLogin from "./pages/student/Login";
import { AuthContext } from "./context/AuthContext";
import LandingPage from "./pages/Home/LandingPage";
import Home from "./pages/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Student from "./pages/student/Student";
import AddStudent from "./pages/student/AddStudent";
import AddStaffs from "./pages/staff/AddStaff";
import Staff from "./pages/staff/Staff";
import Profile from "./pages/profile/Profile";
import Account from "./pages/accounts/Accounts";
import Library from "./pages/library/Library";
import Attendance from "./pages/attendance/Attendance";
import Index from "./pages/placement/Index";
import Examination from "./pages/examination/Examination";
import Footer from "./components/Footer/Footer";
import StudentAttendance from "./pages/student_attendance/StudentAttendance";
import Adddms from "./pages/dms/Adddms";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  const { token } = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <Routes>
        {token ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/addStudent" element={<AddStudent />} />
            <Route path="/addStaffs" element={<AddStaffs />} />
            <Route path="/adddms" element={<Adddms />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/account" element={<Account />} />
            <Route path="/library" element={<Library />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/placement" element={<Index />} />
            <Route path="/examination" element={<Examination />} />
            <Route path="/studentattendance" element={<StudentAttendance />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/staffLogin" element={<StaffLogin />} />
            <Route path="/studentLogin" element={<StudentLogin />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
          </>
        )}
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
