import React, { useState, useEffect } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { FaEyeSlash, FaEye } from "react-icons/fa";
import ChurchLogo from "../assets/teleo-logo.png";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/dashboard");
    } catch (error) {
      setError("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <motion.form // Wrap form with motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -50 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation when component mounts
        transition={{ duration: 0.5 }} // Animation duration
        className="flex flex-col items-center gap-4 mt-[5rem] shadow-xl mx-[2rem] py-12 border-2 w-[23.5rem] rounded-md text-sm bg-gray-50"
      >
        <motion.img // Wrap img with motion.img
          src={ChurchLogo}
          initial={{ opacity: 0 }} // Initial animation state
          animate={{ opacity: 1 }} // Animation when component mounts
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
          className="w-[7.5rem]"
        />
        <motion.h1 // Wrap h1 with motion.h1
          initial={{ opacity: 0, y: -20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation when component mounts
          transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
          className="text-lg"
        >
          LOGIN
        </motion.h1>
        <motion.h1 // Wrap h1 with motion.h1
          initial={{ opacity: 0, y: -20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation when component mounts
          transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
          className="mt-[-1rem] font-extrabold text-2xl"
        >
          MEMBER
        </motion.h1>
        <input
          type="email"
          placeholder="Username"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`py-2 px-2 rounded-md border-2 w-[75%] ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`py-2 px-2 rounded-md border-2 w-[75%] ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        <motion.span // Wrap span with motion.span
          onClick={() => setShowPassword(!showPassword)}
          initial={{ opacity: 0 }} // Initial animation state
          animate={{ opacity: 1 }} // Animation when component mounts
          transition={{ duration: 0.5, delay: 0.6 }} // Animation duration and delay
          className="mt-[-2.7rem] ml-[15.5rem]"
        >
          {showPassword ? (
            <FaEyeSlash className="text-gray-400" />
          ) : (
            <FaEye className="text-gray-400" />
          )}
        </motion.span>
        <motion.p // Wrap p with motion.p
          initial={{ opacity: 0 }} // Initial animation state
          animate={{ opacity: 1 }} // Animation when component mounts
          transition={{ duration: 0.5, delay: 0.8 }} // Animation duration and delay
          className="ml-[10.5rem] text-[0.7rem]"
        >
          {" "}
          <Link to="/forgot-password" className="text-blue-500 underline">
            {" "}
            Forgot Password?{" "}
          </Link>{" "}
        </motion.p>
        <motion.button // Wrap button with motion.button
          type="submit"
          whileHover={{ scale: 1.05 }} // Scale animation on hover
          whileTap={{ scale: 0.95 }} // Scale animation on tap
          className="bg-black text-white py-2 px-5 rounded-md mt-5 font-semibold"
        >
          {" "}
          LOGIN
        </motion.button>
        {error && (
          <motion.p // Wrap error message with motion.p
            initial={{ opacity: 0 }} // Initial animation state
            animate={{ opacity: 1 }} // Animation when error occurs
            transition={{ duration: 0.5 }} // Animation duration
            className="text-red-500 text-center text-[0.7rem]"
          >
            {error}
          </motion.p>
        )}
        <motion.p // Wrap p with motion.p
          initial={{ opacity: 0 }} // Initial animation state
          animate={{ opacity: 1 }} // Animation when component mounts
          transition={{ duration: 0.5, delay: 1 }} // Animation duration and delay
          className="mt-6"
        >
          {" "}
          Need to Signup?{" "}
          <Link to="/signup" className="underline">
            {" "}
            Create Account
          </Link>
        </motion.p>
      </motion.form>
    </div>
  );
}
