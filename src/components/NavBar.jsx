import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { useEffect } from "react";

export default function NavBar(props) {
  const scrollToTop = () => {
    const options = {
      // your options here, for example:
      duration: 500,
      smooth: true,
    };
    scroll.scrollToTop(options);
  };

  return (
    <nav className="fixed top-0 z-10 pointer-events-none w-full">
      <div className="flex justify-between p-5">
        <a onClick={scrollToTop} className="cursor-pointer pointer-events-auto">
          Dan
        </a>
        <div className="flex justify-evenly *:mx-1 *:cursor-pointer">
          <Link
            to={props.about}
            smooth={true}
            duration={500}
            className="pointer-events-auto"
          >
            About
          </Link>
          <Link
            to={props.projects}
            smooth={true}
            duration={500}
            className="pointer-events-auto"
          >
            Projects
          </Link>
          <Link
            to={props.contact}
            smooth={true}
            duration={500}
            className="pointer-events-auto"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
