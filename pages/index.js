import Head from "next/head";
import About from "../components/About/About";
import Contribution from "../components/Contribution/Contribution";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainHeading from "../components/MainHeading/MainHeading";
import SkillAndTools from "../components/SkillAndTools/SkillAndTools";

export default function Home() {
  return (
    <div className="text-[#202124]">
      <Head>
        <title>JunDevHarsh | Front-End Developer Portfolio</title>
        <meta
          name="description"
          content="JunDevHarsh - Front-End Developer Portofolio created with Next.js"
        />
        <meta
          name="keywords"
          content="jundevharsh, front-end developer, portfolio"
        />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative w-full">
        <section className="block">
          <div className="h-8 lg:h-12 bg-white"></div>
          <div className="h-8 lg:h-12 bg-white"></div>
        </section>
        {/* Main heading section */}
        <MainHeading />
        {/* About section */}
        <About />
        {/* Contribution seciton */}
        <Contribution />
        {/* Skills and tools section */}
        <SkillAndTools />
      </main>
      <Footer />
    </div>
  );
}
