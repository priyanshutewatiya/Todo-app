import { useState, useCallback, useMemo } from "react";

/**
 * Todo Component
 * A complete todo management application with local state
 * Features: Add, Delete, Toggle completion, Clear completed, Statistics
 */
function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React Hooks", completed: true },
    { id: 2, text: "Master React Router", completed: false },
    { id: 3, text: "Build a full app", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  // Memoized action handlers
  const addTodo = useCallback(() => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput) {
      const newTodo = {
        id: Date.now(),
        text: trimmedInput,
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
      setInputValue("");
    }
  }, [inputValue]);

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  }, []);

  // Memoized computed values
  const completedCount = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos]
  );

  const pendingCount = useMemo(() => todos.length - completedCount, [todos, completedCount]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  // Styles
  const styles = {
    container: {
      maxWidth: "700px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    },
    header: {
      textAlign: "center",
      marginBottom: "30px",
      paddingBottom: "20px",
      borderBottom: "3px solid #667eea",
    },
    title: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#2d3748",
      margin: "0 0 8px 0",
    },
    subtitle: {
      fontSize: "14px",
      color: "#718096",
      margin: 0,
    },
    inputContainer: {
      display: "flex",
      gap: "10px",
      marginBottom: "25px",
    },
    input: {
      flex: 1,
      padding: "12px 16px",
      fontSize: "16px",
      border: "2px solid #e2e8f0",
      borderRadius: "6px",
      outline: "none",
      transition: "all 0.3s ease",
      fontFamily: "inherit",
    },
    inputFocus: {
      borderColor: "#667eea",
      boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
    },
    button: {
      base: {
        padding: "12px 24px",
        border: "none",
        borderRadius: "6px",
        fontSize: "15px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.2s ease",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
      },
      primary: {
        backgroundColor: "#667eea",
        color: "white",
      },
      danger: {
        backgroundColor: "#f56565",
        color: "white",
      },
      secondary: {
        backgroundColor: "#edf2f7",
        color: "#2d3748",
        border: "1px solid #cbd5e0",
      },
    },
    todoList: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 25px 0",
    },
    todoItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px",
      backgroundColor: "white",
      marginBottom: "10px",
      borderRadius: "6px",
      border: "1px solid #e2e8f0",
      transition: "all 0.3s ease",
    },
    todoText: {
      flex: 1,
      fontSize: "16px",
      color: "#2d3748",
      cursor: "pointer",
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    checkbox: {
      width: "20px",
      height: "20px",
      cursor: "pointer",
    },
    stats: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "15px",
      marginBottom: "25px",
    },
    statCard: {
      backgroundColor: "white",
      padding: "15px",
      borderRadius: "6px",
      border: "1px solid #e2e8f0",
      textAlign: "center",
    },
    statNumber: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#667eea",
      margin: "0 0 5px 0",
    },
    statLabel: {
      fontSize: "13px",
      color: "#718096",
      margin: 0,
      fontWeight: "500",
    },
    emptyState: {
      textAlign: "center",
      padding: "40px 20px",
      color: "#718096",
    },
    emptyIcon: {
      fontSize: "48px",
      marginBottom: "15px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>✓ Todo App</h1>
        <p style={styles.subtitle}>Manage your tasks efficiently</p>
      </header>

      {/* Input Section */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={(e) => {
            e.target.style.borderColor = styles.inputFocus.borderColor;
            e.target.style.boxShadow = styles.inputFocus.boxShadow;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#e2e8f0";
            e.target.style.boxShadow = "none";
          }}
          placeholder="Add a new todo... (press Enter)"
          style={styles.input}
          aria-label="Add new todo"
        />
        <button
          onClick={addTodo}
          style={{ ...styles.button.base, ...styles.button.primary }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#5a67d8";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#667eea";
            e.target.style.transform = "translateY(0)";
          }}
          aria-label="Add todo button"
        >
          ➕ Add
        </button>
      </div>

      {/* Statistics */}
      <div style={styles.stats}>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>{todos.length}</div>
          <p style={styles.statLabel}>Total Tasks</p>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statNumber, color: "#48bb78" }}>{completedCount}</div>
          <p style={styles.statLabel}>Completed</p>
        </div>
        <div style={styles.statCard}>
          <div style={{ ...styles.statNumber, color: "#ed8936" }}>{pendingCount}</div>
          <p style={styles.statLabel}>Pending</p>
        </div>
      </div>

      {/* Todo List or Empty State */}
      {todos.length > 0 ? (
        <>
          <ul style={styles.todoList}>
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  ...styles.todoItem,
                  backgroundColor: todo.completed ? "#f7fafc" : "white",
                  borderColor: todo.completed ? "#cbd5e0" : "#e2e8f0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={styles.todoText}
                  onClick={() => toggleTodo(todo.id)}
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    style={styles.checkbox}
                    aria-label={`Toggle: ${todo.text}`}
                  />
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                      color: todo.completed ? "#a0aec0" : "#2d3748",
                    }}
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  style={{
                    ...styles.button.base,
                    ...styles.button.danger,
                    padding: "6px 12px",
                    fontSize: "13px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#e53e3e";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#f56565";
                    e.target.style.transform = "scale(1)";
                  }}
                  aria-label={`Delete: ${todo.text}`}
                >
                  🗑️ Delete
                </button>
              </li>
            ))}
          </ul>

          {/* Clear Completed Button */}
          {completedCount > 0 && (
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <button
                onClick={clearCompleted}
                style={{
                  ...styles.button.base,
                  ...styles.button.secondary,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#e2e8f0";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#edf2f7";
                }}
                aria-label="Clear all completed todos"
              >
                ✨ Clear Completed ({completedCount})
              </button>
            </div>
          )}
        </>
      ) : (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📋</div>
          <h3 style={{ marginTop: 0, color: "#2d3748" }}>No todos yet!</h3>
          <p>Add a task above to get started. Stay productive! 🚀</p>
        </div>
      )}
    </div>
  );
}

export default Todo;
