import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

/**
 * Navbar Component
 * Main navigation bar with routing links
 */
const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const styles = {
    navbar: {
      backgroundColor: "#2d3748",
      padding: "0",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      position: "sticky",
      top: 0,
      zIndex: 100,
    },
    navContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "70px",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#fff",
      textDecoration: "none",
      marginRight: "40px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    navLinks: {
      display: "flex",
      gap: "30px",
      listStyle: "none",
      margin: 0,
      padding: 0,
      alignItems: "center",
    },
    navLink: {
      color: "#cbd5e0",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      padding: "8px 16px",
      borderRadius: "4px",
      transition: "all 0.3s ease",
      display: "block",
    },
    navLinkActive: {
      color: "#fff",
      backgroundColor: "#667eea",
    },
    hamburger: {
      display: "none",
      flexDirection: "column",
      cursor: "pointer",
      gap: "5px",
    },
    hamburgerLine: {
      width: "25px",
      height: "3px",
      backgroundColor: "#fff",
      borderRadius: "2px",
      transition: "all 0.3s ease",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <Link to="/" style={styles.logo}>
          ⚛️ React App
        </Link>

        <ul style={styles.navLinks}>
          <li>
            <Link
              to="/"
              style={{
                ...styles.navLink,
                ...(isActive("/") ? styles.navLinkActive : {}),
              }}
            >
              🏠 Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                ...styles.navLink,
                ...(isActive("/about") ? styles.navLinkActive : {}),
              }}
            >
              ℹ️ About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
