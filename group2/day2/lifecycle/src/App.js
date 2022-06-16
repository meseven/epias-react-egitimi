import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Users from "./components/Users";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      {/* {isVisible && <Counter />}

      <br />
      <br />
      <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button> */}

      <Users />
    </div>
  );
}

export default App;
