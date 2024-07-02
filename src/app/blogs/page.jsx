import Link from "next/link";

export const blogs = [
  {
    slug: "introduction-to-javascript",
    title: "Introduction to JavaScript",
    description:
      "A beginner's guide to learning JavaScript, covering basic syntax, functions, and DOM manipulation.",
  },
  {
    slug: "advanced-css-techniques",
    title: "Advanced CSS Techniques",
    description:
      "Explore advanced CSS techniques including flexbox, grid layout, animations, and responsive design strategies.",
  },
  {
    slug: "react-for-beginners",
    title: "React for Beginners",
    description:
      "An introductory course on React.js, teaching the fundamental concepts of components, state, and props.",
  },
  {
    slug: "nodejs-backend-development",
    title: "Node.js Backend Development",
    description:
      "Learn how to build scalable backend applications using Node.js and Express, including RESTful APIs and middleware.",
  },
  {
    slug: "mastering-git-and-github",
    title: "Mastering Git and GitHub",
    description:
      "A comprehensive guide to version control with Git and collaboration on projects using GitHub.",
  },
];

const BlogPage = () => {
  return (
    <div className="p-24 ">
      {" "}
      {blogs.map((blog, index) => (
        <div className="border-2 p-12 my-6" key={blog.index}>
          {" "}
          <h3>{blog.title}</h3>
          <h3>{blog.description}</h3>
          <button className="btn btn-sm bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg">
            <Link href={`/blogs/${blog.slug}`}> View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
