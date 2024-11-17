import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import HeroBackground from "./HeroBackground";

export default function Hero(props) {
  return (
    <section className="h-screen w-screen">
      <HeroBackground />
      <div className=" absolute inset-0 p-20 flex flex-col justify-center items-center z-10 pointer-events-none">
        <h1 className="text-9xl">Dan Roderman</h1>
        <p className="m-5 text-3xl">Full-stack Web Developer</p>
      </div>
    </section>
  );
}
