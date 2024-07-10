import HomeBlog from "../components/HomeBlog";

import { Blog_IMG } from "../assets";
import { homeBlog } from "../mocks/homeBlog";

function Home() {
  return (
    <div className="">
      <section>
        <img
          src={Blog_IMG}
          alt="Blog"
          className="w-full h-[20rem] p-2 md:h-[50rem] md:p-5"
        />
      </section>
      <section>
        <div className="flex justify-center items-center">
          <h1 className=" font-bold m-2 p-2">Editor’s Picks</h1>
          <hr className="w-1/4" />
        </div>
      </section>
      <section>
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
    </div>
  );
}

export default Home;
