import Head from "next/head";
import Header from "../components/Header/Header";
import MainHeading from "../components/MainHeading/MainHeading";

export default function Home() {
  return (
    <div>
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
        <MainHeading />
      </main>
    </div>
  );
}
