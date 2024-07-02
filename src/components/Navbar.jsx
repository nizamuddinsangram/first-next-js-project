"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const handle = () => {
    router.push("/login");
  };
  if (pathName.includes("dashboard"))
    return <div className="bg-green-500">opps Dashboard Layout</div>;
  return (
    <div>
      <nav className="bg-blue-500 text-white items-center px-6 py-4 flex justify-between">
        <h6 className="text-3xl">
          Next <span className="text-cyan-900">Hero</span>
        </h6>
        <ul className="flex justify-between items-center space-x-4 ">
          <li>
            <Link
              href="/about"
              className={`hover:text-cyan-900 ${
                pathName === "/about" ? "text-cyan-900 font-bold" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`hover:text-cyan-900 ${
                pathName === "/services" ? "text-cyan-900 font-bold" : ""
              }`}
            >
              service
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className={`hover:text-cyan-900 ${
                pathName === "/contacts" ? "text-cyan-900 font-bold" : ""
              }`}
            >
              contact
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className={`hover:text-cyan-900 ${
                pathName === "/categories" ? "text-cyan-900 font-bold" : ""
              }`}
            >
              categories
            </Link>
          </li>
        </ul>
        <button
          onClick={handle}
          className="bg-white text-cyan-900 px-4 rounded-lg"
        >
          Login
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
