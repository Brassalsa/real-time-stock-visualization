import Link from "next/link";
import NavBar from "../navbar/NavBar";

const Header = () => {
  return (
    <div className="flex flex-wrap gap-3 h-36 justify-center items-center shadow-sm">
      <Link
        href={"/"}
        className="w-full text-center font-semibold text-2xl drop-shadow-lg bg-inherit text-inherit hover:bg-inherit hover:scale-100"
      >
        Real Time Stocks
      </Link>
      <NavBar />
    </div>
  );
};

export default Header;
