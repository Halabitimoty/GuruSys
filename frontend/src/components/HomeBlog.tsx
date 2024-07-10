interface HomeBlogProps {
  img: string;
  title: string;
  content: string;
  paragraph: string;
}

function HomeBlog({ img, title, content, paragraph }: HomeBlogProps) {
  return (
    <article className="w-full">
      <img
        src={img}
        alt="Blog"
        className="w-full h-[20rem] p-4 bg-cover bg-center md:h-[40rem] md:p-5 "
      />
      <div className="p-4 md:p-5">
        <h1 className="py-2 font-bold text-xl">{title}</h1>
        <h2 className="py-2 text-lg">{content}</h2>
        <p className="py-2 text-sm">{paragraph}</p>
      </div>
    </article>
  );
}

export default HomeBlog;
