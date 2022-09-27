import Link from "next/link";
import FooterSocialNavbar from "../SocialNavbar/FooterSocialNavbar";

const Footer = () => {
  return (
    <footer className="relative m-0 mt-12 lg:mt-16 bg-bright_blue">
      <section className="mx-7 sm:mx-12 lg:mx-16 py-6 border-b border-solid border-gray">
        <section className="max-w-full sm:flex sm:flex-1 sm:flex-wrap">
          <FooterSocialNavbar />
        </section>
      </section>
      <section className="mx-7 sm:mx-10 lg:mx-16 py-10 sm:pb-2 flex flex-wrap">
        <div className="mr-12 mb-8 flex flex-[1_0_80px]">
          <Link href="/">
            <a className="p-1 relative flex items-center text-3xl hover:bg-[#e8eaed] text-[#5f6368] hover:text-[#202124] font-medium tracking-wide focus:outline focus:outline-2 focus:outline-[#1967d2] rounded">
              Harsh
            </a>
          </Link>
          <div className="ml-auto flex items-center">
            <p className="flex items-center text-lg text-[#5f6368] text-center font-medium tracking-wide">
              <span>Inspired from</span>
              <Link href={"https://www.google.co.in/"}>
                <a className="ml-1">
                  <span className="text-blue">G</span>
                  <span className="text-red">o</span>
                  <span className="text-yellow">o</span>
                  <span className="text-blue">g</span>
                  <span className="text-green">l</span>
                  <span className="text-red">e</span>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
