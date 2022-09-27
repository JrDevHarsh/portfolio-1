import Logo from "../Logo/Logo";
import DesktopNavbar from "../Navbar/DesktopNavbar";

const Header = () => {
  return (
    <header className="relative top-0 h-16 bg-white border-b border-solid border-b-gray">
      <div className="relative mx-auto px-2 py-0 h-full flex items-center max-w-8xl">
        <Logo />
        <DesktopNavbar />
      </div>
    </header>
  );
};

export default Header;
