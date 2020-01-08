import * as React from "react";

import "./App.css";

import RxjsHooks from "./components/RxjsHooks";
import RxjsHooksWatch from "./components/RxjsHooksWatch";

const App: React.FC = () => {
  const source = [
    "Pieter",
    "Henk",
    "Leo",
    "Darius",
    "Maarten",
    "Paul",
    "Gerwin",
    "Pascal"
  ];

  return (
    <div className="App">
      <h1>First</h1>

      <RxjsHooks name="Hook 1" intervalValue={500} />
      <RxjsHooks name="Hook 2" intervalValue={1000} />
      <RxjsHooksWatch
        name="Watch New Slow"
        intervalValue={10000}
        source={source}
      />
      <RxjsHooksWatch name="Watch New 1" intervalValue={1000} source={source} />
    </div>
  );
};

export default App;
