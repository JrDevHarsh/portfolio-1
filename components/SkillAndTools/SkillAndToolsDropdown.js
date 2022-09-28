import { BsChevronDown } from "react-icons/bs";
import SkillGridBox from "./SkillGridBox";

const SkillAndToolsDropdown = ({ heading, list }) => {
  const addClass = (eve) => {
    console.log("clicked");
    return eve.target.closest(".row").classList.toggle("dropdown_row");
  };

  return (
    <div className="border-t border-solid border-t-gray clear-both">
      <div
        title="Press to expand"
        role={"button"}
        tabIndex={0}
        onClick={(e) => addClass(e)}
        className="row py-6 lg:py-7 flex items-center cursor-pointer text-dark_blue hover:text-[#174ea6] focus:text-[#174ea6] border-b-2 border-solid border-b-gray focus:border-b-dark_blue"
      >
        <h4 className="mr-2 sm:mr-4 lg:mr-6 flex-1 self-center text-base text-current tracking-wider leading-6 font-medium">
          {heading}
        </h4>
        <BsChevronDown className="px-1 h-6 lg:h-9 w-6 lg:w-9 fill-current stroke-[0.25px] transition-transform duration-200 dropdown_arrow" />
      </div>
      <div className="dropdown_content block overflow-hidden">
        <div className="py-6 px-1">
          <div className="grid gap-x-7 sm:gap-x-10 lg:gap-x-12 grid-cols-custom_4 sm:grid-cols-custom_12">
            {list.map((item) => {
              const { id, title, img_src, web_link } = item;
              return (
                <SkillGridBox
                  key={id}
                  title={title}
                  imgSrc={img_src}
                  webSrc={web_link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAndToolsDropdown;
