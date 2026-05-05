import { useNavigate } from "react-router-dom";
import { useState } from "react";

/**
 * Home Component
 * Main landing page with featured items and navigation
 */
function Home() {
  const navigate = useNavigate();
  const [items] = useState([
    { id: 1, name: "React Fundamentals", description: "Learn React basics and hooks" },
    { id: 2, name: "React Router", description: "Master client-side routing" },
    { id: 3, name: "State Management", description: "Manage complex application state" },
    { id: 4, name: "Performance", description: "Optimize React applications" },
  ]);

  const handleViewDetails = (id) => {
    navigate(`/item/${id}`);
  };

  const styles = {
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
      color: "#2d3748",
    },
    title: {
      fontSize: "36px",
      fontWeight: "700",
      marginBottom: "12px",
    },
    subtitle: {
      fontSize: "16px",
      color: "#718096",
      marginBottom: "8px",
    },
    itemsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginBottom: "40px",
    },
    itemCard: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      border: "1px solid #e2e8f0",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    itemName: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#2d3748",
      marginBottom: "10px",
    },
    itemDescription: {
      fontSize: "14px",
      color: "#718096",
      marginBottom: "15px",
      lineHeight: "1.5",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "600",
      transition: "all 0.2s ease",
    },
    features: {
      backgroundColor: "#f8f9fa",
      padding: "30px",
      borderRadius: "8px",
      marginBottom: "30px",
      border: "1px solid #e2e8f0",
    },
    featureTitle: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#2d3748",
      marginBottom: "15px",
    },
    featureList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    featureItem: {
      padding: "10px 0",
      borderBottom: "1px solid #e2e8f0",
      color: "#4a5568",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>🚀 Welcome to React Router App</h1>
        <p style={styles.subtitle}>
          Explore our collection of tutorials and resources
        </p>
      </header>

      {/* Features Section */}
      <section style={styles.features}>
        <h2 style={styles.featureTitle}>✨ Key Features</h2>
        <ul style={styles.featureList}>
          <li style={styles.featureItem}>
            ✅ Client-side routing with React Router
          </li>
          <li style={styles.featureItem}>
            ✅ Dynamic page navigation
          </li>
          <li style={styles.featureItem}>
            ✅ Responsive design
          </li>
          <li style={styles.featureItem}>
            ✅ Modern React hooks
          </li>
        </ul>
      </section>

      {/* Items Grid */}
      <section>
        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#2d3748", marginBottom: "20px" }}>
          📚 Featured Topics
        </h2>
        <div style={styles.itemsGrid}>
          {items.map((item) => (
            <div
              key={item.id}
              style={styles.itemCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <h3 style={styles.itemName}>{item.name}</h3>
              <p style={styles.itemDescription}>{item.description}</p>
              <button
                style={styles.button}
                onClick={() => handleViewDetails(item.id)}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ textAlign: "center", paddingTop: "20px", borderTop: "2px solid #e2e8f0" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#2d3748", marginBottom: "15px" }}>
          Ready to dive in?
        </h2>
        <p style={{ color: "#718096", marginBottom: "20px" }}>
          Click on any topic above to explore more details.
        </p>
      </section>
    </div>
  );
}

export default Home;
