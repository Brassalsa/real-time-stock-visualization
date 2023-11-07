import navLinks from "@/utils/nav_links";
import Link from "next/link";

function NavBar() {
  return (
    <>
      {navLinks.map((i) => (
        <Link key={i[1]} href={"/" + i[1]}>
          {i[0]}
        </Link>
      ))}
    </>
  );
}

export default NavBar;
