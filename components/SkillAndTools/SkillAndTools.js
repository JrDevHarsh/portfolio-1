import Image from "next/image";
import SkillAndToolsDropdown from "./SkillAndToolsDropdown";
import Skills from "./Skills.json";

const SkillAndTools = () => {
  return (
    <>
      <section className="mx-7 sm:mx-10 lg:mx-16">
        <div className="grid gap-x-7 sm:gap-x-10 lg:gap-x-12 grid-cols-custom_4 sm:grid-cols-custom_12 border-t border-solid border-t-gray">
          <div className="my-12 lg:my-14 block col-end-span_4 sm:col-end-span_12 text-center">
            <h3 className="text-5xl sm:text-[8vw] leading-[1.3em] tracking-wider">
              {/* <span>Ski</span> */}
              <span className="text-blue">S</span>
              <span className="text-red">k</span>
              <span className="text-yellow">i</span>
              {[...Array(5)].map((_, idx) => {
                return (
                  <Image
                    key={idx + "-image"}
                    src={`/images/icons/skill-${idx + 1}.png`}
                    width={50}
                    height={50}
                    alt={`skill image ${idx + 1}`}
                  />
                );
              })}
              <span className="text-blue">l</span>
              <span className="text-green">l</span>
              <span className="text-red">s</span>
            </h3>
          </div>
        </div>
      </section>
      <section className="mx-7 sm:mx-10 lg:mx-16">
        <div className="grid gap-x-7 sm:gap-x-10 lg:gap-x-12 grid-cols-custom_4 sm:grid-cols-custom_12">
          <div className="block col-end-span_4 sm:col-end-span_12">
            <div>
              {Skills.map((skill) => {
                const { id, heading, list } = skill;
                return (
                  <SkillAndToolsDropdown
                    key={id}
                    heading={heading}
                    list={list}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillAndTools;
