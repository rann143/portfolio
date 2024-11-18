import { useEffect, useRef, useState } from "react";

export default function HeroBackground() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    // Initial measurement
    updateDimensions();

    // Add resize listener
    window.addEventListener("resize", updateDimensions);

    // Cleanup
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const hexCols = Array.from(
    { length: dimensions.width + 50 / 50 },
    (_, index) => <div key={index} className="hexagon"></div>
  );

  const hexRows = Array.from(
    { length: dimensions.height + 55 / 55 },
    (_, index) => (
      <div key={index} className="row">
        {hexCols}
      </div>
    )
  );

  // const hexCols = new Array(dimensions.width + 50 / 50);
  // const cols = hexCols.map((_, index) => {
  //   return <div key={index} className="hexagon"></div>;
  // });

  // const hexRows = new Array(dimensions.height + 55 / 55);
  // const rows = hexRows.map((_, index) => {
  //   return (
  //     <div key={index} className="row">
  //       {cols}
  //     </div>
  //   );
  // });

  return (
    <div
      ref={containerRef}
      className="absolute h-full w-full overflow-hidden container-ani z-0"
    >
      {" "}
      {hexRows}
    </div>
  );
}
