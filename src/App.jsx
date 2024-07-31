import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePages from "./pages/HomePages";
import ViewPages from "./pages/ViewPages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/view/:id" element={<ViewPages />} />
    </Routes>
  );
}

export default App;
