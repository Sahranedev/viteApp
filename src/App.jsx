import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [helloElements, setHelloElements] = useState([]);

  useEffect(() => {
    const numberOfElements = Math.floor(count / 1000);
    setHelloElements(new Array(numberOfElements).fill(null));
    const numberOfElements2 = Math.floor(count / 2000);
    setHelloElements(new Array(numberOfElements2).fill(null));
  }, [count]);

  const style = {
    HelloTtile: {
      color: "red",
    },
    HelloTtile2: {
      color: "blue",
    },
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 100)}>
          count is {count}
        </button>
        {count === 1
          ? helloElements.map((_, index) => (
              <h1 key={index} className="test" style={style.HelloTtile}>
                Hello la terre
              </h1>
            ))
          : helloElements.map((_, index) => (
              <h1 key={index} className="test" style={style.HelloTtile}>
                Hello la terre
              </h1>
            ))}

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
