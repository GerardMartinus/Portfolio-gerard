const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Link à esquerda */}
        <a className="navbar-brand" href="/">
          Gerard Martinus (Bruno D'Morais)
        </a>

        {/* Botão responsivo */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links da navbar */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                Portfolio
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/games">
                Games / Achievements
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/about-me">
                About Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
