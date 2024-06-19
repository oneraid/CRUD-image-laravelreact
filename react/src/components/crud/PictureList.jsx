import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PictureList = () => {
  const [Pictures, setPictures] = useState([]);

  useEffect(() => {
    getPictures();
  }, []);

  const getPictures = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/gallery");
      // Periksa apakah response.data.galleries dan response.data.galleries.data ada
      const picturesArray = response.data.galleries?.data || [];
      setPictures(picturesArray);
    } catch (error) {
      console.error("Error fetching pictures:", error);
      setPictures([]); // Set as empty array on error
    }
  };

  const deletePicture = async (pictureId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/gallerydelete/${pictureId}`);
      getPictures();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-bg1-500 to-bg2-500 min-h-screen">
      <div className="justify-between items-center" style={{ paddingTop: "120px" }}>
        <h2 className="text-4xl font-bold mb-5 text-center mx-auto">
          Explore Our Gallery
        </h2>
        <Link to="/pictures/add" className="button-wrapper px-5 lg:px-[72px]">
          <button className="button px-6 py-2 bg-light_brown text-black rounded-full hover:bg-brown hover:text-white">
            Add New Image
          </button>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 px-5 lg:px-[72px] ">
          {Pictures.length > 0 ? (
            Pictures.map((picture) => (
              <div
                key={picture.id}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 flex flex-col "
              >
                <img
                  src={picture.url}
                  alt="Picture"
                  className="w-full h-auto object-cover mx-auto"
                />
                <div className="p-4 flex-grow">
                  <p className="text-xl font-bold text-center mb-2">{picture.name}</p>
                  <p className="text-sm text-gray-500 mb-4">{picture.description}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      to={`edit/${picture.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                    <a
                      href={picture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button bg-green-600 text-white hover:bg-green-700 rounded-full text-center"
                      style={{ width: "50%" }}
                    >
                      View
                    </a>
                    <button
                      onClick={() => deletePicture(picture.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No pictures found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PictureList;
