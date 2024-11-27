"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../common/modal";
export default function SignUpComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-full px-52 flex justify-center items-start bg-gray-100">
      {/* Left Side: Simple Sentences */}
      <div className="w-1/2 h-full space-y-2 px-28 py-32 bg-blue-200 text-white flex flex-col justify-start items-start">
        <h2 className="text-3xl font-bold">Welcome to Our Service</h2>
        <p className="text-xl">Join us and explore the world</p>
        <p className="text-xl">Easy and Fast Sign Up</p>
        <div className="w-full pt-12 flex justify-center items-center">
          <Image src="/beerRemove.png" alt="설명" width={500} height={300} />
        </div>
      </div>

      {/* Right Side: Signup Form */}
      <div className="w-1/2 h-full p-8 bg-white">
        <div className="space-y-6 px-14 py-20">
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 after:content-['*'] after:inline after:text-[#f9572e]"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 after:content-['*'] after:inline after:text-[#f9572e]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 after:content-['*'] after:inline after:text-[#f9572e]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label htmlFor="terms" className="block text-gray-700">
              <input type="checkbox" name="terms" id="termsCheck" />
              <span> I accept the Review-Spot </span>
              <button
                className="text-blue-500 underline hover:text-blue-800 after:content-['*'] after:inline after:text-[#f9572e]"
                onClick={openModal}
              >
                terms and conditions
              </button>
            </label>
          </div>
          {/* Sign Up Button */}
          <div>
            <button
              type="button"
              className="w-full bg-blue-200 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition"
            >
              Sign Up
            </button>
          </div>
          <div>
            <fieldset className="border-t-2 pt-4 text-center">
              <legend className="text-gray-700 px-4">or</legend>
              <p className="text-center block text-gray-700">
                Sign up with your social account
              </p>
              <div className="pt-4 px-6 flex justify-around items-center">
                <div className="w-12 h-12 border-2 rounded-full">카톡</div>
                <div className="w-12 h-12 border-2 rounded-full">페북</div>
                <div className="w-12 h-12 border-2 rounded-full">구글</div>
              </div>
            </fieldset>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2 className="text-2xl font-bold mb-4">
              Review-Spot General Terms and Conditions
            </h2>
            <p className="mb-4">내용이 들어가야 함</p>
            <button
              className="float-right bg-gray-500 text-white py-2 px-4 rounded"
              onClick={closeModal}
            >
              닫기
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
}
