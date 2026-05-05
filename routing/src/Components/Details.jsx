import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback, useMemo } from "react";

// ============ Constants ============
const STYLES = {
  container: {
    padding: "24px",
    maxWidth: "700px",
    margin: "0 auto",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
    minHeight: "100vh",
    backgroundColor: "#f5f7fa",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "32px",
    paddingBottom: "16px",
    borderBottom: "3px solid #007bff",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1a202c",
    margin: 0,
  },
  badge: {
    display: "inline-block",
    padding: "4px 12px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  content: {
    marginBottom: "28px",
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    border: "1px solid #e2e8f0",
    transition: "all 0.3s ease",
  },
  cardError: {
    borderColor: "#fc8181",
    backgroundColor: "#fff5f5",
  },
  itemId: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
    fontSize: "16px",
    color: "#2d3748",
  },
  idLabel: {
    fontWeight: "600",
    color: "#4a5568",
  },
  idValue: {
    color: "#007bff",
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "monospace",
    padding: "4px 8px",
    backgroundColor: "#f0f7ff",
    borderRadius: "4px",
  },
  description: {
    color: "#718096",
    fontSize: "14px",
    lineHeight: "1.6",
    margin: 0,
  },
  errorMessage: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#c53030",
    fontSize: "15px",
    fontWeight: "500",
  },
  buttonContainer: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  button: {
    base: {
      padding: "12px 24px",
      border: "none",
      borderRadius: "6px",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s ease",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      outline: "none",
    },
    primary: {
      backgroundColor: "#007bff",
      color: "white",
    },
    primaryHover: {
      backgroundColor: "#0056b3",
      boxShadow: "0 4px 12px rgba(0, 86, 179, 0.3)",
      transform: "translateY(-2px)",
    },
    secondary: {
      backgroundColor: "#edf2f7",
      color: "#2d3748",
      border: "1px solid #cbd5e0",
    },
    secondaryHover: {
      backgroundColor: "#e2e8f0",
      borderColor: "#a0aec0",
    },
  },
  loadingSpinner: {
    display: "inline-block",
    width: "16px",
    height: "16px",
    border: "2px solid #f3f4f6",
    borderTop: "2px solid #007bff",
    borderRadius: "50%",
    animation: "spin 0.6s linear infinite",
  },
};

// ============ Keyframe Animation ============
const keyframes = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

// ============ Component ============
/**
 * Details Component
 * Displays detailed information about a selected item based on URL parameter
 * Features: Navigation, loading state, error handling, responsive design
 */
function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // Inject keyframe styles
  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = keyframes;
    document.head.appendChild(styleEl);
    return () => styleEl.remove();
  }, []);

  // Validate ID on mount or change
  useEffect(() => {
    if (!id) {
      console.warn("⚠️ Details component rendered without an ID parameter");
    }
  }, [id]);

  // Memoized handlers
  const handleGoBack = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => navigate(-1), 200);
  }, [navigate]);

  const handleRefresh = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  // Memoized computed values
  const isValidId = useMemo(() => Boolean(id && id.trim()), [id]);
  const itemNumber = useMemo(() => parseInt(id, 10), [id]);

  const buttonStyle = useMemo(
    () => ({
      ...STYLES.button.base,
      ...STYLES.button.primary,
      ...(isButtonHovered ? STYLES.button.primaryHover : {}),
    }),
    [isButtonHovered]
  );

  return (
    <div style={STYLES.container}>
      {/* Header */}
      <header style={STYLES.header}>
        <h1 style={STYLES.heading}>📋 Item Details</h1>
        {isValidId && <span style={STYLES.badge}>ID: {id}</span>}
      </header>

      {/* Main Content */}
      <main style={STYLES.content}>
        {isLoading ? (
          <div style={{ ...STYLES.card, textAlign: "center", padding: "40px" }}>
            <div style={STYLES.loadingSpinner}></div>
            <p style={{ marginTop: "16px", color: "#718096" }}>Loading...</p>
          </div>
        ) : isValidId ? (
          <article style={STYLES.card}>
            <div style={STYLES.itemId}>
              <span style={STYLES.idLabel}>Item ID:</span>
              <code style={STYLES.idValue}>{id}</code>
            </div>

            <p style={STYLES.description}>
              This page displays detailed information for the item you selected. 
              You can view comprehensive details, make modifications, or navigate back to the list.
            </p>

            {!isNaN(itemNumber) && (
              <div style={{ marginTop: "16px", padding: "12px", backgroundColor: "#f0f7ff", borderRadius: "4px" }}>
                <p style={{ margin: 0, fontSize: "14px", color: "#2c5aa0" }}>
                  <strong>Item Type:</strong> Numeric ID ({itemNumber})
                </p>
              </div>
            )}
          </article>
        ) : (
          <article style={{ ...STYLES.card, ...STYLES.cardError }}>
            <div style={STYLES.errorMessage}>
              <span>⚠️</span>
              <div>
                <p style={{ margin: 0, fontWeight: "600" }}>No Item Selected</p>
                <p style={{ margin: "4px 0 0 0", fontSize: "13px", color: "#a0423e" }}>
                  Please go back and select an item to view details.
                </p>
              </div>
            </div>
          </article>
        )}
      </main>

      {/* Action Buttons */}
      <footer style={STYLES.buttonContainer}>
        <button
          onClick={handleGoBack}
          style={buttonStyle}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          disabled={isLoading}
          aria-label="Navigate back to previous page"
        >
          <span>←</span> Go Back
        </button>

        {isValidId && (
          <button
            onClick={handleRefresh}
            style={{
              ...STYLES.button.base,
              ...STYLES.button.secondary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = STYLES.button.secondaryHover.backgroundColor;
              e.currentTarget.style.borderColor = STYLES.button.secondaryHover.borderColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = STYLES.button.secondary.backgroundColor;
              e.currentTarget.style.borderColor = STYLES.button.secondary.border;
            }}
            disabled={isLoading}
            aria-label="Refresh item details"
          >
            <span>🔄</span> Refresh
          </button>
        )}
      </footer>
    </div>
  );
}

export default Details;