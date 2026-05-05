import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Details from "./Components/Details";
import "./App.css";

/**
 * Main App Component with Routing
 * Provides navigation and route management for the entire application
 */
export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/item/:id" element={<Details />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>&copy; 2026 React Router App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}