import "./App.css";
import Container from "./components/Container";
import { LangContextProvider } from "./context/LangContext";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <LangContextProvider>
          <Container />
        </LangContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
