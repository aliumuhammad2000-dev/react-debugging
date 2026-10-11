import { useState } from "react";
import Counter from "./components/Counter";
import Display from "./components/Display";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Debugging App</h1>

      <Display count={count} />

      <Counter
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default App;