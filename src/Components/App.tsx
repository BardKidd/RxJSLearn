import { useEffect, useRef } from "react";
import { fromEvent, map, takeUntil, concatAll } from "rxjs";

const App: React.FC = () => {
  const divRef = useRef(null);

  useEffect(() => {
    // console.log(divRef.current);
  }, []);

  return (
    <>
      <div
        ref={divRef}
        id="drag"
        style={{
          position: "absolute",
          display: "inline-block",
          width: "100px",
          height: "100px",
          backgroundColor: "#fff",
          cursor: "all-scroll",
        }}
      ></div>
    </>
  );
};

export default App;
