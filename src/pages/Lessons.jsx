import { Link, Outlet } from "react-router-dom";

function Lessons() {
  return (
    <div>
      <div className="sidenav">
        <Link to="/lessons/major-scale">Major Scale</Link>
        <Link to="/lessons/minor-scale">Minor Scale</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Lessons;
