import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Technology from "./pages/Technology";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="min-h-svh font-bellefair overflow-hidden bg-black scroll-smooth">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<HomePage />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
