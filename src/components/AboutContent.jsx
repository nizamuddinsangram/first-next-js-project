import Link from "next/link";

const AboutContent = () => {
  return (
    <div className="mt-4 ">
      <Link href="/about/history" className="mx-10 ">
        History
      </Link>
      <Link href="/about/mission">mission</Link>
    </div>
  );
};

export default AboutContent;
