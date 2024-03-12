import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const handleLogout = () => {
    // Clear all items from local storage
    localStorage.clear();
   
    window.location.href = '/'; // Adjust the URL as needed
 };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">eBooking</span>
        </Link>
        {user ? (
 <div className="navItems">
    <span>Welcome, {user.username}!</span>
    <button className="navButton" onClick={handleLogout}>Logout</button>
 </div>
) : (
 <div className="navItems">
 <button className="navButton" onClick={() => window.location.href = 'http://localhost:3001/login'}>
  Admin Login
</button>

 </div>
)}

      </div>
    </div>
  );
};

export default Navbar;
