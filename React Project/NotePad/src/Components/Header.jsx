import './Header.css';

function Header() {
  return (
    <header className="header">

      {/* Left Section */}
      <div className="header-left">
        <h1>📝 NoteTask</h1>
      </div>

      {/* Middle Section */}
      <div className="header-center">
        <input
          type="text"
          placeholder="Search notes or tasks..."
        />
      </div>

      {/* Right Section */}
      <div className="header-right">
        <button className="btn note-btn" >
          + Note
        </button>

        <button className="btn task-btn" >
          + Task
        </button>
      </div>

    </header>
  );
}

export default Header;