import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPicture = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const getPictureById = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/gallery/${id}`);
      setTitle(response.data.gallery.name);
      setDescription(response.data.gallery.description);
      setPreview(response.data.gallery.url);
    } catch (error) {
      console.error("Error fetching the picture details:", error);
    }
  };

  useEffect(() => {
    getPictureById();
  }, []);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updatePicture = async (e) => {
    e.preventDefault();
    setErrors({});
    
    const formData = new FormData();
    formData.append("_method", "PUT"); // Set _method to PUT for Laravel method override
    formData.append("name", title);
    formData.append("description", description);

    // Only append image if it's selected for update
    if (file) {
      formData.append("image", file);
    }

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/galleryupdate/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/pictures");
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.error("Validation Error:", error.response.data.errors);
        setErrors(error.response.data.errors || {});
      } else {
        console.error("Error updating the picture:", error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-bg1-500 to-bg2-500">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-lg">
        <form onSubmit={updatePicture}>
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
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name[0]}</p>}
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
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description[0]}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              onChange={loadImage}
            />
            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image[0]}</p>}
          </div>

          {preview && (
            <div className="mb-4">
              <img src={preview} alt="Preview" className="rounded-md" />
            </div>
          )}

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPicture;
