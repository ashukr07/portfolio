import { Link } from "react-router";
import { socials } from "../data/constant";
import { Github,Linkedin,Facebook,Instagram,Mail,Twitter } from "lucide-react";


export function HeroContent() {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I&apos;m <span className="text-primary">Ashutosh</span>
      </h1>
      <p className="text-xl mb-6">
      I develop Full Stack web applications and enjoy coding.
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
          to={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${socials.mail}`}
          target="_blank"
          className="text-2xl text-gray-600 hover:text-primary" 
        >
          <Mail />  
        </Link>
      </div>
    </div>
  )
}

