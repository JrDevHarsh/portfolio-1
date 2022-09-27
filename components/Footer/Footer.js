import FooterSocialNavbar from "../SocialNavbar/FooterSocialNavbar";

const Footer = () => {
  return (
    <footer className="relative m-0 mt-12 lg:mt-16 bg-bright_blue">
      <section className="mx-7 sm:mx-12 lg:mx-16 py-6 border-b border-solid border-gray">
        <section className="max-w-full sm:flex sm:flex-1 sm:flex-wrap">
          <FooterSocialNavbar />
        </section>
      </section>
      Hello
    </footer>
  );
};

export default Footer;
