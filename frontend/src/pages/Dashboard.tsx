import { useEffect, useState } from "react";
import BlogForm from "../components/BlogForm";
import useAuth from "../store/useAuth";

function Dashboard() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const { getBlogs, deleteBlog, datasToUpdate, loading, logout } = useAuth();

  const fetchBlogs = async () => {
    const blogs = await getBlogs();
    if (blogs) {
      setBlogs(blogs);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleEdit = (id: string) => {
    const blog = blogs.find((blog) => blog._id === id);
    if (blog) {
      datasToUpdate(blog, id);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteBlog(id);
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
  };

  return (
    <section className="relative">
      <h2 className="text-center text-lg py-4">Welcome to the Dashboard</h2>
      <button
        onClick={() => logout()}
        className="absolute right-[1rem] top-4 border-2 px-3 py-1 rounded-lg md:px-5 md:py-2 md:right-[5rem] md:top-4"
      >
        Logout
      </button>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="w-full p-5 md:w-1/2">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : blogs.length === 0 ? (
            <div className="text-center font-bold">Start blogging...</div>
          ) : (
            blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 my-4 flex flex-row justify-between items-center"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Title : {blog.title}
                  </h3>
                  <h5 className="text-gray-600 mb-4">{blog.content}</h5>
                  <p className="text-gray-600">{blog.paragraph}</p>
                </div>
                <div className="">
                  <button
                    onClick={() => handleEdit(blog._id)}
                    className="bg-slate-100 text-blue-600 w-full px-3 py-1 my-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-slate-100 text-red-600 w-full px-3 py-1 my-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="w-full h-[50%] md:w-1/2">
          <BlogForm fetchBlogs={fetchBlogs} />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
