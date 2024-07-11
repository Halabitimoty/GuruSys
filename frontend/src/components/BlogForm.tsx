import React, { useState, useEffect } from "react";
import useAuth from "../store/useAuth";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function BlogForm() {
  const { createBlog, updateBlog, setLoading, dataToUpdate } = useAuth();
  const [title, setTitle] = useState(dataToUpdate?.data?.title || "");
  const [content, setContent] = useState(dataToUpdate?.data?.content || "");
  const [paragraph, setParagraph] = useState(
    dataToUpdate?.data?.paragraph || ""
  );
  const [toogleMode, setToggleMode] = useState(false);

  useEffect(() => {
    if (dataToUpdate) {
      setTitle(dataToUpdate.data.title || "");
      setContent(dataToUpdate.data.content || "");
      setParagraph(dataToUpdate.data.paragraph || "");
    }
  }, [dataToUpdate]);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content && paragraph) {
      setLoading(true);
      createBlog({ title, content, paragraph });
      toast("🦄 Successfully Created!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // setLoading(false);
    }
  };
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content && paragraph && dataToUpdate?.id) {
      updateBlog({ title, content, paragraph }, dataToUpdate.id);
      toast("🦄 Successful Updated!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (toogleMode) {
      handleCreate(e);

      setTitle("");
      setContent("");
      setParagraph("");
    } else {
      handleUpdate(e);
      setTitle("");
      setContent("");
      setParagraph("");
    }
  };
  return (
    <div className="inset-0 flex justify-center items-center top-[15rem] md:top-[20rem]">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h1 className="bg-slate-100 w-full flex justify-center items-center font-semibold p-2 rounded">
          Keeping Blogging...
        </h1>
        <form onSubmit={handleSubmit} method="post" className="mt-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="block w-full p-3 my-2 border border-gray-300 rounded-md"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            name="content"
            placeholder="Content"
            className="block w-full p-3 my-2 border border-gray-300 rounded-md"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <input
            type="text"
            name="paragraph"
            placeholder="Paragraph"
            className="block w-full p-3 my-2 border border-gray-300 rounded-md"
            onChange={(e) => setParagraph(e.target.value)}
            value={paragraph}
          />
          <div className="flex flex-row">
            <button
              onClick={() => {
                setToggleMode(true);
              }}
              type="submit"
              className="block w-full p-3 mx-1 my-2 border border-gray-300 rounded-md bg-green-100 text-black"
            >
              Create
            </button>
            <button
              onClick={() => {
                setToggleMode(false);
              }}
              type="submit"
              className="block w-full p-3 mx-1 my-2 border border-gray-300 rounded-md bg-orange-100 text-black"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default BlogForm;
