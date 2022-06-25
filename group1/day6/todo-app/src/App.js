import "./App.css";
import Container from "./components/Container";
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <Container />
    </TodoContextProvider>
  );
}

export default App;
