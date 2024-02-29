import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header";
import { useMainContext } from "./context/MainContext";
import MainRoutes from "./routes/mainRoutes";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/search";

function App() {
  const { DarkMode } = useMainContext();
  const [search, setSearch] = useState("");

  return (
    <div
      style={{
        background: DarkMode ? "black" : "white",
        color: DarkMode ? "white" : "black",
      }}
      className="App"
    >
      <Header gameValue={setSearch} />

      <MainRoutes />
      <Routes>
        <Route path="/search" element={<Search gameSearch={search} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
