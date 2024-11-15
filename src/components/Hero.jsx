import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

export default function Hero(props) {
  return (
    <div className="h-screen">
      <div className="p-20 flex flex-col justify-center items-center">
        <h1>Dan Roderman</h1>
        <p>Full-stack Web Developer</p>
      </div>
    </div>
  );
}
