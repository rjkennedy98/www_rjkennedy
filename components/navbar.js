import Link from "next/link";
import Image from "next/image";
import LinkedInLogo from "../public/svg/rjk.svg";

export const PAGE_HOME = 1;
export const PAGE_ABOUT = 2;
export const PAGE_PROJECTS = 3;

const PAGES = {
  [PAGE_HOME]: { path: "/", text: "Home" },
  [PAGE_ABOUT]: { path: "/about", text: "About Me" },
  [PAGE_PROJECTS]: { path: "/projects", text: "Projects" },
};

export default function Navbar({ location }) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue p-2">
      <div className="block items-left mr-4">
        <button className="flex items-left px-3 py-2 rounded text-teal-200 border-teal-400 hover:text-white hover:border-white mr-4">
          <Image src={LinkedInLogo} alt="RJK Initials" height="60" width="60" />
        </button>
      </div>
      <div className="font-semibold">
        <Link href="/">Richard Kennedy</Link>
      </div>
      <div className="ml-4 w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        {Object.keys(PAGES).map((page) => {
          const pageInfo = PAGES[page];
          const textColor = location == page ? "text-yellow" : "text-black";
          const classes = "block mr-4 lg:inline-block " + textColor;
          return (
            <Link key={"header" + page} href={pageInfo.path}>
              <a className={classes}>
                <div className="p-4 no-underline hover:underline">
                  {pageInfo.text}
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
