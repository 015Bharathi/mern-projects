import React from "react";
import profilePic from "../assets/react.svg"
const ProfileCard: React.FC = () => {
  return (
    <>
      
      <div className="max-w-sm mx-auto bg-blue-50 rounded-xl shadow-md overflow-hidden text-center p-6">
        <img
          className="w-24 h-24 mx-auto rounded-full"
          src={profilePic}
          alt="Profile"
        />
        <h2 className="mt-4 text-xl font-semibold">John Doe</h2>
        <p className="text-gray-500 mt-2">Frontend Developer & Designer</p>

        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-blue-500 font-bold hover:underline">
            Twitter
          </a>
          <a href="#" className="text-blue-700 font-bold hover:underline">
            LinkedIn
          </a>
        </div>

        <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Contact
        </button>
      </div>
    </>
  );
};

export default ProfileCard;
