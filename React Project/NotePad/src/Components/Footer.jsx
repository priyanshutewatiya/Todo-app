import './Fotter.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-left">
        <p>📝 NoteTask</p>
      </div>

      <div className="footer-center">
        <p>© {year} All rights reserved</p>
      </div>

      <div className="footer-right">
        <a href="#">About</a>
        <a href="#">Help</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;