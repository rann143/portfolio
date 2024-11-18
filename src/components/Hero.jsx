import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import HeroBackground from "./HeroBackground";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

<Icon path={mdiChevronDown} size={1} />;

export default function Hero(props) {
  return (
    <section className="h-screen w-screen">
      <HeroBackground />
      <div className=" absolute inset-0 p-20 flex flex-col justify-center items-center z-10 pointer-events-none">
        <h1 className="text-9xl">Dan Roderman</h1>
        <p className="m-5 text-3xl">Full-stack Web Developer</p>
      </div>
      <Link
        to="about"
        smooth={true}
        duration={1000}
        className="pointer-events-auto"
      >
        <Icon
          path={mdiChevronDown}
          size={2}
          className="absolute bottom-0 left-2/4 -ml-[16px] animate-bounce"
        />
      </Link>
      ;
    </section>
  );
}
