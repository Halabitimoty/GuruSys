import React, { useState, useEffect } from "react";
import useAuth from "../store/useAuth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface BlogFormProps {
  fetchBlogs: () => void;
}

function BlogForm({ fetchBlogs }: BlogFormProps) {
  const { createBlog, updateBlog, setLoading, dataToUpdate } = useAuth();
  const [title, setTitle] = useState(dataToUpdate?.data?.title || "");
  const [content, setContent] = useState(dataToUpdate?.data?.content || "");
  const [paragraph, setParagraph] = useState(
    dataToUpdate?.data?.paragraph || ""
  );
  const [toogleMode, setToggleMode] = useState(!dataToUpdate);

  useEffect(() => {
    if (dataToUpdate) {
      setTitle(dataToUpdate.data.title || "");
      setContent(dataToUpdate.data.content || "");
      setParagraph(dataToUpdate.data.paragraph || "");
      setToggleMode(false);
    } else {
      setToggleMode(true);
    }
  }, [dataToUpdate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content && paragraph) {
      setLoading(true);
      try {
        if (toogleMode) {
          await createBlog({ title, content, paragraph });
          toast.success("🦄 Successfully Created!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          fetchBlogs();
        } else if (dataToUpdate?.id) {
          await updateBlog({ title, content, paragraph }, dataToUpdate.id);
          toast.success("🦄 Successfully Updated!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          fetchBlogs();
        }
      } catch (error) {
        toast.error("Error occurred. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setLoading(false);
        setTitle("");
        setContent("");
        setParagraph("");
      }
    }
  };

  return (
    <div className="inset-0 flex justify-center  top-[15rem] md:top-[20rem]">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h1 className="bg-slate-100 w-full flex justify-center items-center font-semibold p-2 rounded">
          Keep Blogging...
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
              onClick={() => setToggleMode(true)}
              type="submit"
              className="block w-full p-3 mx-1 my-2 border border-gray-300 rounded-md bg-green-100 text-black"
            >
              Create
            </button>
            <button
              onClick={() => setToggleMode(false)}
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
