import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CharacterCreator from "./pages/CharacterCreator/CharacterCreator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/creator" element={<CharacterCreator />} />
    </Routes>
  );
}

export default App;
