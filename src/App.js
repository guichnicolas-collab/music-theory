import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Contact from "./pages/Contact";
import Lesson from "./pages/Lesson";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/lessons">Lessons</NavLink> |{" "}
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />}>
          <Route path=":id" element={<Lesson />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
