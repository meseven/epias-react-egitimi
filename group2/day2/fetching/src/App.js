import { useState } from "react";
import Detail from "./components/Detail";
import Users from "./components/Users";

function App() {
  const [activeUserId, setActiveUserId] = useState(null);

  return (
    <div className="App">
      <Users setActiveUserId={setActiveUserId} />
      {activeUserId && <Detail activeUserId={activeUserId} />}
    </div>
  );
}

export default App;
