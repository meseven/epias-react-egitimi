import "./App.css";
import Users from "./components/Users";
import { UsersContextProvider } from "./context/UsersContext";

function App() {
  return (
    <div className="App">
      <UsersContextProvider>
        <Users />
      </UsersContextProvider>
    </div>
  );
}

export default App;
