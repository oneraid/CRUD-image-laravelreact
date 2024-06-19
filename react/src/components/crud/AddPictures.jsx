import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPicture = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // Tambah state untuk deskripsi
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    if (image.size <= 5 * 1024 * 1024) {
      setFile(image);
      setPreview(URL.createObjectURL(image));
    } else {
      alert("File size should be below 5MB");
      e.target.value = null;
    }
  };

  const savePicture = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", title);
    formData.append("description", description);
    formData.append("image", file);
    try {
      await axios.post("http://127.0.0.1:8000/api/gallery", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/pictures");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-bg1-500 to-bg2-500 flex flex-col">
      <div className="max-w-md mx-auto bg-white p-8 border shadow-lg rounded-md mt-10">
        <form onSubmit={savePicture}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Picture Name
            </label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Picture Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              onChange={loadImage}
              required
            />
            <small className="text-gray-500">Max file size: 5MB.</small>
          </div>

          {preview && (
            <img src={preview} alt="Preview Image" className="mt-3 rounded-md" />
          )}

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      {preview && showModal && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
            <img src={preview} alt="Preview Image" />
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setShowModal(false)}
          ></button>
        </div>
      )}
    </div>
  );
};

export default AddPicture;
