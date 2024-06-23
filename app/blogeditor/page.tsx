"use client";
import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
const UploadBlogs = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [allTitles, setallTitles] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [imageUrl, setimageUrl] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setisLoading(true);
    const response = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        imageUrl,
      }),
    });
    if (response.ok) {
      setisLoading(false);
      const data = await response.json();
      fetchData();
      alert("Blog added successfully");
    } else {
      setisLoading(false);
      alert("Error");
      console.error("Failed to add blog:", response.statusText);
    }
  };
  const handleDelete = async (id) => {
    const response = await fetch("/api/blog", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      alert("Blog deleted successfully");
      fetchData();
    }
  };
  const fetchData = async () => {
    const response = await fetch("/api/blog", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setallTitles(data);
    } else {
      alert("Failed to fetch blogs");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen w-screen">
      <div className="text-4xl flex justify-center items-center mt-10 font-bold">
        <h1 className="">Blog Editor</h1>
      </div>
      <div className=" ml-10">
        <div className="text-3xl font-bold">
          <h1 className="">Add a Blog</h1>
        </div>
        <div className="flex">
          <div className=" w-[50%]">
            <form onSubmit={handleSubmit}>
              <div className="mb-5 w-[50%] mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                  Add Image Url
                </label>
                <input
                  onChange={(e) => {
                    setimageUrl(e.target.value);
                  }}
                  value={imageUrl}
                  placeholder="Enter link here"
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-5 w-[50%] mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                  Add Title
                </label>
                <input
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                  value={title}
                  placeholder="Title"
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="w-[50%]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                  Add Description
                </label>
                <textarea
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                  value={description}
                  id="message"
                  className="h-36 resize-none block p-2.5 w-full text-l text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write description here"
                ></textarea>
              </div>
              <div className="mt-5 flex justify-end w-[50%] items-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Add
                </button>
                <div className="loader">
                  {isLoading ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className="w-[50%] pl-5 text-3xl font-bold">
            <h1 className="mb-10">All Blogs</h1>
            {allTitles.map((blog, i) => (
              <div
                key={i}
                className="w-[60%] flex justify-between items-center mb-2"
              >
                <div className="text-2xl font-semibold">
                  <h1>{blog.title}</h1>
                </div>
                <div
                  className="text-red-500 cursor-pointer"
                  onClick={() => {
                    handleDelete(blog._id);
                  }}
                >
                  <FaTrashAlt className="h-7 w-7" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadBlogs;
