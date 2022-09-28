import Image from "next/image";
import Link from "next/link";

const SkillGridBox = ({ title, imgSrc, webSrc }) => {
  return (
    <div className="skill_grid_box pb-0.5 flex col-end-span_4 sm:col-end-span_6 lg:col-end-span_3">
      <Link href={webSrc}>
        <a className="my-0.5 py-4 sm:pl-1.5 w-full flex justify-start text-[#5f6368] hover:text-[#202124] focus:text-dark_blue rounded overflow-hidden outline-2 outline-none hover:outline focus:outline outline-transparent hover:outline-[#5f6368] focus:outline-dark_blue">
          <Image
            src={`/images/${imgSrc}-icon.png`}
            height={50}
            width={50}
            alt={`${title}-icon`}
          />
          <p className="my-auto ml-4 sm:ml-6 text-current text-lg sm:text-xl">
            {title}
          </p>
        </a>
      </Link>
    </div>
  );
};

export default SkillGridBox;
