import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePages from "./pages/HomePages";
import XrTreeBeechContainer from "./components/xr-tree-beech/XrTreeBeechContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/xr-tree-beech/:id" element={<XrTreeBeechContainer />} />
    </Routes>
  );
}

export default App;
