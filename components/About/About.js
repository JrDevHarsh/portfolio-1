import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="mx-7 sm:mx-10 lg:mx-16">
      <div className="mx-auto py-16 px-7 sm:px-0 sm:pt-24 sm:pb-44 lg:pt-14 lg:px-0 lg:pb-24 h-auto min-h-custom_2 lg:min-h-custom_1 w-custom_3 sm:w-custom_2 lg:w-full max-w-full sm:max-w-[100vw] lg:max-w-6xl grid gap-x-7 sm:gap-x-10 lg:gap-x-12 grid-cols-custom_4 sm:grid-cols-custom_12">
        {/* left column */}
        <div className="my-auto mx-0 h-fit flex items-start justify-center flex-col flex-nowrap col-end-span_4 sm:col-end-span_12 lg:col-end-span_6">
          <h2 className="mt-0 lg:mt-0.5 mx-auto lg:mr-auto lg:ml-0 mb-10 lg:mb-0 w-auto max-w-md text-center lg:text-left text-[1.5rem] sm:text-[2.2rem] lg:text-[2.6rem] sm:-tracking-[0.5px] font-normal">
            Hello there
            <br />I am <span className="text-blue">Harsh</span>
            <br />
            <span className="text-red">Front</span>-
            <span className="text-yellow">End</span>{" "}
            <span className="text-green">Developer</span>
          </h2>
          <p className="mt-10 mx-auto lg:mt-6 lg:mx-0 sm:py-0 sm:px-6 lg:p-0 w-full max-w-lg lg:max-w-md text-base tracking-wider text-dark_gray font-normal text-center lg:text-left">
            I am Front-End Developer located in <span className="text-blue">India</span>. I have a serious passion
            and enjoy <span className="text-yellow">building</span> everything from <span className="text-red">scratch to interactive web app</span>.
            <br />
            Well-organised person, <span className="text-green">problem solver</span>, independent employee with
            high attention to detail. Interested in the entire <span className="text-blue">frontend spectrum </span>
            and working an ambitious projects with <span className="text-green">positive people</span>.
          </p>
          <Link href="/">
            <a className="mt-10 my-0 mx-auto lg:mx-0 py-2.5 px-6 min-w-[100px] max-w-sm min-h-[48px] inline-block text-center text-white bg-dark_blue hover:bg-[#185abc] font-medium tracking-wider overflow-hidden rounded border border-solid border-transparent hover:shadow-shadow_2 transition-all duration-100">
              My Resume
            </a>
          </Link>
        </div>
        {/* right column */}
        <div className="absolute lg:relative my-auto mx-0 h-0 lg:h-full hidden col-end-span_4 sm:col-end-12 lg:col-end-span_6 lg:flex lg:items-center lg:flex-row lg:flex-nowrap lg:justify-end">
          <div className="relative w-full h-[390px] lg:h-[579px] flex items-center justify-center flex-nowrap flex-row">
            <Image src="/images/avatar/coder.svg" height={579} width={393} alt="coder avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
