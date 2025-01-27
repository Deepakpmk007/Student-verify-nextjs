"use client";

import React from "react";
import { useAppSelector } from "@/lip/store";

const UserDetails = () => {
  const student = useAppSelector((state) => state.studentId.value);

  return (
    <main className="p-6">
      <div className="max-w-4xl mx-auto bg-slate-300 rounded-lg shadow-xl p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Student Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(student)
            .filter(
              ([key, value]) => key !== "uniqueId" && key !== "file" && value // Exclude empty values
            )
            .map(([key, value]) => (
              <div key={key} className="text-sm font-medium text-gray-600">
                {key
                  .replace(/([A-Z])/g, " $1") // Convert camelCase to readable string
                  .replace(/^./, (str) => str.toUpperCase())}
                :
                <span className="block text-lg font-semibold text-gray-900">
                  {Array.isArray(value) ? value.join(", ") : value}
                </span>
              </div>
            ))}
        </div>
      </div>
      <div className="flex items-center justify-between  w-full mt-6">
        <button className="group flex items-center gap-2 px-6 py-3 border border-black rounded-lg text-lg font-medium relative hover:bg-red-600 hover:text-white transition duration-300">
          <span className="text-black group-hover:-translate-x-2 group-hover:text-white transition-all duration-300">
            ←{" "}
          </span>
          Back
        </button>
        <button className="group flex items-center gap-2 px-6 py-3 border border-black rounded-lg text-lg font-medium relative hover:bg-green-400 hover:text-white transition duration-300">
          Next
          <span className="text-black group-hover:translate-x-2 group-hover:text-white transition-all duration-300">
            →
          </span>
        </button>
      </div>
    </main>
  );
};

export default UserDetails;
