import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import ChurchLogo from "../assets/teleo-logo.png";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Create user with email and password using Firebase authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Handle successful signup, such as redirecting to login page
      console.log("User signed up:", user);
      navigate("/login"); // Redirect to login page

      const response = await axios.post("http://localhost:3000/adduser", {
        church_name: e.target.elements.churchName.value,
        building_house: e.target.elements.buildingHouse.value,
        street_name: e.target.elements.streetName.value,
        barangay: e.target.elements.barangay.value,
        province: e.target.elements.province.value,
        postal_code: e.target.elements.postalCode.value,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error signing up:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3 mt-[1rem] shadow-xl mx-[2rem] py-4 border-2 w-[23.5rem] rounded-md text-sm bg-gray-50"
        >
          <motion.img
            src={ChurchLogo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-[7.5rem]"
          />
          <motion.h1
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl"
          >
            {" "}
            SIGN UP{" "}
          </motion.h1>
          <motion.p
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[0.8rem] text-center text-gray-500 mt-[-0.5rem]"
          >
            Conclude your experience with us. Sign up now!
          </motion.p>
          <input
            type="text"
            placeholder="Church Name"
            required
            name="churchName"
            className="py-2 px-2 rounded-md border-2 w-[75%]"
          />
          <input
            type="text"
            placeholder="Building/House No."
            required
            name="buildingHouse"
            className="py-2 px-2 rounded-md border-2 w-[75%]"
          />
          <div className="flex flex-row justify-center gap-2">
            <input
              type="text"
              placeholder="Street Name"
              required
              name="streetName"
              className="py-2 px-2 rounded-md border-2 w-[37%]"
            />
            <input
              type="text"
              placeholder="Barangay"
              required
              name="barangay"
              className="py-2 px-2 rounded-md border-2 w-[37%]"
            />
          </div>
          <div className="flex flex-row justify-center gap-2">
            <input
              type="text"
              placeholder="Province"
              required
              name="province"
              className="py-2 px-2 rounded-md border-2 w-[37%]"
            />
            <input
              type="text"
              placeholder="Postal Code"
              required
              name="postalCode"
              className="py-2 px-2 rounded-md border-2 w-[37%]"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 px-2 rounded-md border-2 w-[75%]"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-2 px-2 rounded-md border-2 w-[75%] "
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="py-2 px-2 rounded-md border-2 w-[75%] "
          />
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-red-500 text-center"
            >
              {error}
            </motion.p>
          )}
          <div className="flex gap-2">
            {" "}
            <Link to="/choose-account">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white py-2 px-5 rounded-md mt-[1rem] font-semibold"
              >
                {" "}
                <Link to="/choose-account" className="text-white">
                  GO BACK
                </Link>
              </motion.button>
            </Link>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-700 text-white py-2 px-5 rounded-md mt-[1rem] font-semibold"
            >
              {" "}
              SIGN UP
            </motion.button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            className="mt-1"
          >
            {" "}
            Already have an account?{" "}
            <Link to="/" className="underline">
              {" "}
              Login
            </Link>
          </motion.p>
        </motion.form>
      </div>
    </div>
  );
}
