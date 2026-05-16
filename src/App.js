import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Contact from "./pages/Contact";
import Lesson1 from "./pages/Lesson1";
import Lesson2 from "./pages/Lesson2";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/lessons">Lessons</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />}>
          <Route path="major-scale" element={<Lesson1 />} />
          <Route path="minor-scale" element={<Lesson2 />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <div className="footer">2026</div> */}
    </BrowserRouter>
  );
}

export default App;
