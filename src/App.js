import "./App.css";
import Header from "./components/Header";
import { useMainContext } from "./context/MainContext";
import MainRoutes from "./routes/mainRoutes";

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

      <MainRoutes />
    </div>
  );
}

export default App;
