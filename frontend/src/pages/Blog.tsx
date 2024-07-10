import HomeBlog from "../components/HomeBlog";
import { homeBlog } from "../mocks/homeBlog";

function Blog() {
  return (
    <section>
      <h1 className="bg-slate-100 w-full h-[20rem] flex justify-center items-center font-semibold md:h-[40rem]">
        Welcome to Blog's Page
      </h1>
      <div className="grid grid-cols-1 gap-4 p-2 mx-auto md:grid-cols-2 md:gap-8">
        {homeBlog.map((blog, index) => (
          <HomeBlog
            key={index}
            img={blog.img}
            title={blog.title}
            content={blog.content}
            paragraph={blog.paragraph}
          />
        ))}
      </div>
    </section>
  );
}

export default Blog;
