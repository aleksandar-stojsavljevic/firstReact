import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar fixed-top navbar-dark bg-dark py-3">
        <div className="container-fluid  d-flex">
          <div>
            <Link to="/" className="navbar-brand me-4">
              Home
            </Link>
            <Link to="/add-item" className="navbar-brand">
              Add Item
            </Link>
          </div>
          <div>
            <Link to="#" className="navbar-brand">
              Log In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
