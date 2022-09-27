import Link from "next/link";

const Logo = () => {
  return (
    <div className="h-auto w-auto lg:ml-16">
      <Link href="/">
        <a className="mt-2 px-2 py-1 text-2xl font-normal tracking-wide hover:bg-bright_blue rounded focus:outline focus:outline-2 focus:outline-[#1967d2]">
          <span className="text-blue">H</span>
          <span className="text-red">a</span>
          <span className="text-yellow">r</span>
          <span className="text-blue">s</span>
          <span className="text-green">h</span>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
