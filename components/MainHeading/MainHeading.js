const MainHeading = () => {
  return (
    <section className="mx-auto py-8 max-h-[500px] min-h-[400px] sm:max-h-[600px] sm:min-h-[450px] lg:max-h-[583px] lg:min-h-[340px] text-center flex items-center justify-center">
      <div>
        <h1 className="mx-auto w-4/5 sm:w-3/5 md:4/5 lg:max-w-4xl lg:w-full text-[#202124] text-[8vw] sm:text-[5vw] lg:text-[2.875rem] font-normal -tracking-wide leading-[1.3em] sm:leading-[1.2em] lg:leading-[3.75rem]">
          A <span className="text-blue">front-end developer</span> passionate
          about creating{" "}
          <span className="text-red">interactive applications</span> and make it{" "}
          <span className="text-green">universally accessible</span> and{" "}
          <span className="text-yellow">useful</span>.
        </h1>
      </div>
    </section>
  );
};

export default MainHeading;
