import { useContext } from "react";
import AdminLogin from "./pages/admin/Login";
import Signup from "./pages/signup/Signup";
import StaffLogin from "./pages/staff/Login";
import StudentLogin from "./pages/student/Login";
import { AuthContext } from "./context/AuthContext";
import LandingPage from "./pages/Home/LandingPage";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
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

function App() {
  const { token } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Routes>
        {token ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/addStudent" element={<AddStudent />} />
            <Route path="/addStaffs" element={<AddStaffs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/account" element={<Account />} />
            <Route path="/library" element={<Library />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/placement" element={<Index />} />
            <Route path="/examination" element={<Examination />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/staffLogin" element={<StaffLogin />} />
            <Route path="/studentLogin" element={<StudentLogin />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
