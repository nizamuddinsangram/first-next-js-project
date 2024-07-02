import { blogs } from "../page";

const slugPage = ({ params }) => {
  console.log(params.slug);
  const singleBlog = blogs.find((blog) => blog.slug === params.slug);
  const { title, description } = singleBlog;
  return (
    <div className="h-screen">
      <h5>{title}</h5>
      <h5>{description}</h5>
    </div>
  );
};

export default slugPage;
