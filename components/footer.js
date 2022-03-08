import Link from "next/link";
import Image from "next/image";
import GithubLogo from "../public/svg/github.svg";
import LinkedInLogo from "../public/svg/linkedin.svg";

export default function Footer() {
  return (
    <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
      <div className="flex justify-between items-center lg:justify-between mt-4 p-2 border-t border-gray-300">
        <div className="mx-2 hidden lg:block">
          <span>My social media:</span>
        </div>
        <div className="mx-2 flex-grow">
          <Link href="https://www.linkedin.com/in/richard-kennedy-825a553b/">
            <a className="text-gray0">
              <Image src={LinkedInLogo} alt="linkedin" height="30" width="30" />
            </a>
          </Link>
          <Link href="https://github.com/rjkennedy98">
            <a className="mx-2 text-gray">
              <Image src={GithubLogo} alt="github" height="30" width="30" />
            </a>
          </Link>
        </div>
        <div className="text-black p-6">
          <span>© 2021 Copyright:</span>
          <span
            className="ml-2 text-black font-semibold"
            href="https://tailwind-elements.com/"
          >
            Richard Kennedy
          </span>
        </div>
      </div>
    </footer>
  );
}
