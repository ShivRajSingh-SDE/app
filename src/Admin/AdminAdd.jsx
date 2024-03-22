import React, { useState } from "react";
import axios from "axios";

const AdminAdd = () => {
  const [image, setimage] = useState("");
  const [Live, setLive] = useState("");
  const [Code, setCode] = useState("");
  const [Name, setName] = useState("");
  const [Commit, setCommit] = useState("");
  const [Social, setSocial] = useState("");

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(`${process.env.FRONT}/api/products`, {
        image,
        Name,
        Live,
        Code,
        Commit,
        Social,
      });

      if (response.status === 201) {
        alert("Product added successfully");
        window.location.reload();
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className=" flex justify-center text-white items-center h-screen">
      <div className="flex flex-col  items-center space-y-4">
        <h1 className="text-2xl font-bold">Add Product</h1>

        <input
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => setimage(e.target.value)}
          className="w-full px-4 py-2 text-black bg-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="text"
          placeholder="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 text-black bg-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="text"
          placeholder="Live Link"
          value={Live}
          onChange={(e) => setLive(e.target.value)}
          className="w-full px-4 py-2 text-black bg-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="text"
          placeholder="Code link"
          value={Code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-4 py-2 text-black bg-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="text"
          placeholder="Commit link"
          value={Commit}
          onChange={(e) => setCommit(e.target.value)}
          className="w-full px-4 py-2 text-black bg-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="text"
          placeholder="Code link"
          value={Social}
          onChange={(e) => setSocial(e.target.value)}
          className="w-full px-4 py-2 text-black bg-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <button
          onClick={handleAddProduct}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AdminAdd;
