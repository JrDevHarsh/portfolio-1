import { useEffect, useRef, useState } from "react";
import Projects from "./Projects.json";

const Project = () => {
  const [current, setCurrent] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      countRef.current++;
      if (countRef.current >= 8) {
        countRef.current = 0;
        setCurrent((prev) => (prev + 1) % 3);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-7 sm:mx-10 lg:mx-16">
      <div className="mx-auto lg:pt-0 py-16 px-7 sm:px-0 lg:px-7 lg:pb-12 w-full sm:w-custom_2 max-w-8xl">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mb-4 text-2xl lg:text-3xl tracking-wider">
            Some Things I've Built
          </h3>
          <p className="mx-auto max-w-3xl sm:max-w-lg lg:max-w-3xl text-sm sm:text-base text-dark_gray font-normal tracking-wider">
            A selection of projects that I have worked with. Check out each
            project to get information about what programming languages, tools,
            technologies and platforms being used.
          </p>
        </div>
        {Projects.map((product) => (
          <div key={product.id} className="project_div lg:min-h-[380px] grid gap-x-7 sm:gap-x-10 lg:gap-x-12 grid-cols-custom_4 sm:grid-cols-custom_12">
            {/* left col */}
            <div className="project_left_div block col-end-span_4 sm:col-end-span_12 lg:col-end-span_6"></div>
            {/* right col */}
            <div className="project_right_div block col-end-span_4 sm:col-end-span_12 lg:col-end-span_6">
              <div className="relative">
                <div className="relative my-6 mx-0 pt-14 flex items-center justify-center lg:justify-start flex-row flex-nowrap lg:flex-wrap text-center">
                  {product.features.map((feature, index) => (
                    <div
                      key={feature.id}
                      className={`${
                        current === index
                          ? "unique_dropdown_item animation"
                          : "unique_dropdown_item animationEnd"
                      } p-0.5 mx-0.5 mb-14 last:mb-0 min-h-[30px] min-w-[20px] w-full flex items-start`}
                    >
                      <div className="relative mr-[1.5rem] min-h-[30px] h-full w-[5px]">
                        <div className="unique_rectangular hidden lg:block lg:absolute lg:top-0 h-full w-0.5 bg-[#c4c3c3]">
                          <span className="rectangular_body lg:block h-0 bg-[#4285F4]"></span>
                        </div>
                      </div>
                      <div className="relative w-full text-left">
                        <h5 className="max-w-[90%] text-[0.8rem] sm:text-[1.1rem] text-[#202124] font-medium">
                          {feature.heading}
                        </h5>
                        <p className="mt-2 lg:mt-4 mx-auto lg:mx-0 mb-0 h-auto max-w-lg lg:max-w-sm pointer-events-none text-dark_gray text-[0.8rem] font-normal tracking-wider">
                          {feature.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
