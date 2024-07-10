import { useEffect, useState } from "react";
import BlogForm from "../components/BlogForm";
import useAuth from "../store/useAuth";

function Dashboard() {
  const { getBlogs, deleteBlog, datasToUpdate } = useAuth();
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    const blogs = await getBlogs();
    if (blogs) {
      setBlogs(blogs);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleEdit = async (id: string) => {
    const data = blogs.filter((blog) => {
      if (blog._id === id) {
        return blog;
      }
    });

    datasToUpdate(data[0], id);
  };
  const handleDelete = async (id: string) => {
    await deleteBlog(id);
    fetchBlogs();
  };

  return (
    <section className="">
      <h2 className="text-center text-lg py-4">Welcome to the Dashboard</h2>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="w-full p-5 md:w-1/2">
          {blogs.map((blog) => (
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
          ))}
        </div>
        <div className="w-full md:w-1/2">
          <BlogForm />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
