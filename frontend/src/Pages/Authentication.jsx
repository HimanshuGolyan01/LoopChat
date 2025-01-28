import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setName("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = isSignUp
      ? { name, email, password }
      : { email, password };

    try {
      const url = isSignUp
        ? "http://localhost:3000/api/user/registeruser"
        : "http://localhost:3000/api/user/login";

      const { data } = await axios.post(url, userData);
      toast.success(`${isSignUp ? "Signup" : "Signin"} successful!`);

      console.log("Response data:", data);

      
        navigate("/chats");
      
    } catch (error) {
      console.error(
        "Authentication failed:",
        error.response?.data?.message || error.message
      );
      toast.error(error.response?.data?.message || "Authentication failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {isSignUp && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-700 rounded-lg bg-gray-900 focus:ring-2 focus:ring-gray-600"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-700 rounded-lg bg-gray-900 focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-700 rounded-lg bg-gray-900 focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 rounded-lg text-white font-medium"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">
            {isSignUp
              ? "Already have an account? "
              : "Don’t have an account? "}
            <button
              onClick={toggleAuthMode}
              className="text-blue-400 hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
