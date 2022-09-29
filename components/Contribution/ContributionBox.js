import Image from "next/image";

const ContributionBox = ({ title, imgSrc, githubSrc, list }) => {
  return (
    <div className="p-0.5 mr-0 sm:mr-7 flex basis-96 items-center sm:items-start flex-column sm:flex-row flex-shrink-0 gap-7 md:gap-10">
      <a
        target="_blank"
        rel="noreferrer"
        href={githubSrc}
        className="h-full block bg-white overflow-hidden outline-none shadow-shadow_1 hover:shadow-shadow_2 rounded-lg border border-solid border-gray hover:border-transparent transition-all duration-300"
      >
        <div className="h-full relative flex flex-col">
          <div className="relative h-16 pt-6 px-6 flex flex-[0_0_auto]">
            <Image
              src={`/images/${imgSrc}.png`}
              width={120}
              height={36}
              alt={`${title} repository logo`}
            />
          </div>
          <div className="p-6">
            <p className="my-0 text-xl text-dark_gray uppercase font-medium tracking-wider">
              {title}
            </p>
            <div className="mt-2">
              <ul className="list-disc ml-4">
                {list.map((item, idx) => (
                  <li
                    key={title + "-" + idx}
                    className="text-sm text-[#202124] font-medium tracking-wider"
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContributionBox;
