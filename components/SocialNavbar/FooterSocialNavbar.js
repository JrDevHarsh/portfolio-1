import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import Link from "next/link";

const FooterSocialNavbar = () => {
  return (
    <div className="flex items-center self-center flex-1 flex-wrap-reverse sm:flex-wrap">
      <p className="inline-flex mr-3 sm:pb-0 text-base font-medium flex-grow-0 sm:flex-grow-1 flex-shrink-0">
        Follow us
      </p>
      <ul className="m-0 max-w-full flex flex-1 flex-wrap sm:flex-nowrap self-center">
        <li className="h-12 w-12 inline-flex items-center self-center leading-normal">
          <Link href={"/"}>
            <a className="mr-0.5 h-full w-full mx-auto p-0.5 bg-bright_blue hover:bg-[#e8eaed] focus:outline focus:outline-2 focus:outline-dark_blue flex items-center justify-center">
              <BsLinkedin className="w-1/2 h-1/2" />
            </a>
          </Link>
        </li>
        <li className="mr-0.5 h-12 w-12 inline-flex items-center self-center leading-normal">
          <Link href={"/"}>
            <a className="h-full w-full mx-auto p-0.5 bg-bright_blue hover:bg-[#e8eaed] focus:outline focus:outline-2 focus:outline-dark_blue flex items-center justify-center">
              <BsGithub className="w-1/2 h-1/2" />
            </a>
          </Link>
        </li>
        <li className="mr-0.5 h-12 w-12 inline-flex items-center self-center leading-normal">
          <Link href={"/"}>
            <a className="h-full w-full mx-auto p-0.5 bg-bright_blue hover:bg-[#e8eaed] focus:outline focus:outline-2 focus:outline-dark_blue flex items-center justify-center">
              <AiFillFacebook className="w-1/2 h-1/2" />
            </a>
          </Link>
        </li>
      </ul>
      <div className="mb-6 sm:mb-0 pb-5 sm:pb-0 w-full sm:w-auto flex items-center justify-end border-b border-solid border-gray sm:border-none">
        <GrLanguage />
        <Link href="/">
          <a className="ml-1 p-2.5 min-w-[48px] text-center text-[#202124] hover:bg-[#1a73e80a] outline-none">
            English
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FooterSocialNavbar;
