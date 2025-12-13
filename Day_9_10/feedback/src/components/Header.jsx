import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerLeft">
          <Link to="/" className="logo">
            <span className="logoIcon">📝</span>
            <span className="logoText">Feedback System</span>
          </Link>
        </div>
        
        <nav className="headerNav">
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/all-feedback" className="navLink">
            All Feedback
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
