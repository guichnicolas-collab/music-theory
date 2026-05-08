import { Link, Outlet } from "react-router-dom";

function Lessons() {
  return (
    <div>
      <h1>Lessons</h1>
      <Link to="/lessons/1">Lesson 1</Link>
      <Link to="/lessons/2">Lesson 1</Link>
      <Outlet />
    </div>
  );
}

export default Lessons;
