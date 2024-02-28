import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header";
import { useMainContext } from "./context/MainContext";
import MainRoutes from "./routes/mainRoutes";
import Search from "./components/search";

function App() {
  const { DarkMode } = useMainContext();
  const [search, setSearch] = useState("");

  return (
    <div
      style={{
        background: DarkMode ? "black" : "",
        color: DarkMode ? "black" : "",
      }}
      className="App"
    >
      <Header gameValue={setSearch} />
      <Search gameSearch={search} />

      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
