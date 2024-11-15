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
    <nav className="sticky top-0 z-10 bg-orange-200">
      <div className="flex justify-between p-5">
        <a onClick={scrollToTop} className="cursor-pointer">
          Dan
        </a>
        <div className="flex justify-evenly *:mx-1 *:cursor-pointer">
          <Link to={props.about} smooth={true} duration={500}>
            About
          </Link>
          <Link to={props.projects} smooth={true} duration={500}>
            Projects
          </Link>
          <Link to={props.contact}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
