import "./App.css";
import Header from "./components/Header";
import { useMainContext } from "./context/MainContext";

function App() {
  const { DarkMode } = useMainContext();

  return (
    <div
      style={{
        background: DarkMode ? "black" : "",
        color: DarkMode ? "black" : "",
      }}
      className="App"
    >
      <Header />
    </div>
  );
}

export default App;
