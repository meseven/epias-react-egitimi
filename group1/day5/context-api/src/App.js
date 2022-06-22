import "./App.css";
import Container from "./components/Container";
import { LangContextProvider } from "./context/LangContext";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <LangContextProvider>
      <ThemeContextProvider>
        <Container />
      </ThemeContextProvider>
    </LangContextProvider>
  );
}

export default App;
