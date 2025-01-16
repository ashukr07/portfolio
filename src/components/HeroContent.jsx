import { Link } from "react-router";
import { socials } from "../data/constant";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Twitter,
} from "lucide-react";

export function HeroContent() {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I&apos;m <span className="text-primary">Ashutosh</span>
      </h1>
      <p className="text-xl mb-6">
        I build full-stack web applications with a focus on functionality and
        simplicity.
      </p>
      <div className="flex justify-center md:justify-start space-x-4 mb-6">
        <Link
          to={socials.linkedin}
          target="_blank"
          className="text-2xl text-gray-600 hover:text-primary"
        >
          <Linkedin />
        </Link>
        <Link
          to={socials.github}
          target="_blank"
          className="text-2xl text-gray-600 hover:text-primary"
        >
          <Github />
        </Link>
        <Link
          to={socials.twitter}
          target="_blank"
          className="text-2xl text-gray-600 hover:text-primary"
        >
          <Twitter />
        </Link>
        <Link
          to={socials.instagram}
          target="_blank"
          className="text-2xl text-gray-600 hover:text-primary"
        >
          <Instagram />
        </Link>
        <Link
          to={socials.facebook}
          target="_blank"
          className="text-2xl text-gray-600 hover:text-primary"
        >
          <Facebook />
        </Link>
        <Link
          to={socials.linktree}
          target="_blank"
          className="group text-2xl text-gray-600 hover:text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 417 512.238"
            className="w-6 h-6 fill-gray-600 group-hover:fill-primary"
          >
            <path
              fillRule="nonzero"
              d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"
            />
          </svg>

          {/* <img src="/linktree-logo-icon.svg" alt="Linktree" className="group-hover:fill-black w-6 h-6" /> */}
        </Link>
        <Link
          to={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${socials.mail}`}
          target="_blank"
          className="text-2xl text-gray-600 hover:text-primary"
        >
          <Mail />
        </Link>
      </div>
    </div>
  );
}
