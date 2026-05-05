import { useCallback } from "react";

/**
 * About Component
 * Displays information about the application and organization
 */
const About = () => {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    },
    header: {
      borderBottom: "3px solid #667eea",
      paddingBottom: "20px",
      marginBottom: "30px",
    },
    title: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#2d3748",
      margin: "0 0 10px 0",
    },
    subtitle: {
      fontSize: "16px",
      color: "#718096",
      margin: 0,
    },
    section: {
      marginBottom: "30px",
      padding: "20px",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      border: "1px solid #e2e8f0",
    },
    sectionTitle: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#2d3748",
      marginBottom: "12px",
      marginTop: 0,
    },
    sectionText: {
      color: "#4a5568",
      lineHeight: "1.8",
      margin: 0,
      fontSize: "15px",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      padding: "10px 0",
      borderBottom: "1px solid #e2e8f0",
      color: "#4a5568",
      fontSize: "15px",
      lineHeight: "1.6",
    },
    highlight: {
      color: "#667eea",
      fontWeight: "600",
    },
    teamGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
      marginTop: "15px",
    },
    teamCard: {
      backgroundColor: "white",
      padding: "15px",
      borderRadius: "6px",
      border: "1px solid #e2e8f0",
      textAlign: "center",
    },
    teamName: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#2d3748",
      marginBottom: "5px",
    },
    teamRole: {
      fontSize: "13px",
      color: "#718096",
    },
  };

  const teamMembers = [
    { name: "Alice Johnson", role: "Lead Developer" },
    { name: "Bob Smith", role: "UI/UX Designer" },
    { name: "Carol White", role: "Full Stack Developer" },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>📖 About Us</h1>
        <p style={styles.subtitle}>
          Learn more about our organization and mission
        </p>
      </header>

      {/* Organization Info */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🏫 Our Institution</h2>
        <p style={styles.sectionText}>
          <span style={styles.highlight}>KIET (Kalyan Institute of Engineering & Technology)</span> is recognized as a{" "}
          <strong>Deemed University</strong> and stands as one of the leading educational
          institutions in India. We are committed to providing excellence in education
          and fostering innovation in technology.
        </p>
      </section>

      {/* Mission */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🎯 Our Mission</h2>
        <p style={styles.sectionText}>
          To empower students with cutting-edge technology skills, foster creative
          thinking, and prepare them to become industry-ready professionals who can
          contribute meaningfully to society.
        </p>
      </section>

      {/* Values */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>💎 Core Values</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>✨ <strong>Excellence</strong> - Striving for the highest standards</li>
          <li style={styles.listItem}>🤝 <strong>Collaboration</strong> - Working together for success</li>
          <li style={styles.listItem}>🔬 <strong>Innovation</strong> - Embracing new technologies</li>
          <li style={styles.listItem}>📚 <strong>Learning</strong> - Continuous education and growth</li>
          <li style={styles.listItem}>🌍 <strong>Impact</strong> - Making a difference in the world</li>
        </ul>
      </section>

      {/* Team */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>👥 Our Team</h2>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.teamCard}>
              <div style={styles.teamName}>{member.name}</div>
              <div style={styles.teamRole}>{member.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📞 Get In Touch</h2>
        <p style={styles.sectionText}>
          Have questions? We'd love to hear from you!
          <br />
          <strong>Email:</strong> info@kiet.edu
          <br />
          <strong>Phone:</strong> +91-XXXXXXX
          <br />
          <strong>Address:</strong> KIET Campus, Delhi, India
        </p>
      </section>
    </div>
  );
};

export default About;
