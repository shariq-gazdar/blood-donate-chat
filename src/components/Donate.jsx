import React, { useState } from "react";
import { db } from "../firebase"; // Import Firestore db
import { collection, addDoc } from "firebase/firestore";

const BloodDonationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    contact: "",
    email: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add document to Firestore
      await addDoc(collection(db, "donors"), formData);
      console.log("Document written with ID: ", formData);
      // Reset form
      setFormData({
        name: "",
        age: "",
        bloodGroup: "",
        contact: "",
        email: "",
        date: "",
      });
      alert("Form submitted successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-red-600">
          Blood Donation Form
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Age Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          {/* Blood Group */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="bloodGroup"
            >
              Blood Group
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              id="bloodGroup"
              name="bloodGroup"
              type="text"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contact"
            >
              Contact Number
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              id="contact"
              name="contact"
              type="tel"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Date Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Donation Date
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BloodDonationForm;
