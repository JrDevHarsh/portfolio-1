import ContributionBox from "./ContributionBox";
import Contributions from "./Contributions.json";

const Contribution = () => {
  return (
    <section className="mx-7 sm:mx-10 lg:mx-16">
      <div>
        {/* contributions heading */}
        <div className="grid grid-cols-custom_4 md:grid-cols-custom_12 gap-7 md:gap-10">
          <div className="text-center self-center col-end-span_4 md:col-end-span_8 col-start-1 md:col-start-3">
            <div className="mb-9">
              <h2 className="text-xl sm:text-2xl text-[#202124] font-medium leading-7 sm:leading-8">
                Some <span className="text-blue">open-source</span>{" "}
                <span className="text-red">contributions</span> made me{" "}
                <span className="text-yellow">stand out</span> in the{" "}
                <span className="text-green">crowd</span>.
              </h2>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="relative block pt-6 min-w-[300px]">
            <div className="overflow-hidden">
              <div className="flex flex-row flex-wrap gap-y-4 translate-x-0">
                {Contributions.map((contribute) => {
                  const { id, title, img_src, github_src, list } = contribute;
                  return (
                    <ContributionBox
                      key={id}
                      title={title}
                      imgSrc={img_src}
                      githubSrc={github_src}
                      list={list}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contribution;
