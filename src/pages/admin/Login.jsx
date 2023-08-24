import { useContext,useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { adminLogin } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    adminLogin(email,password)
  };

  return (
    <>
      <div className="container mx-auto p-8 flex">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl text-center mb-12 font-thin">
            Admin Log in Here!
          </h1>
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="p-8">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                />
              </div>
              <button
                className="w-full p-3 mt-4 bg-orange-600 text-white rounded shadow"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
              <div className="text-gray-600">Forgot password?</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
