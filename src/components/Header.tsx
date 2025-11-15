'use client';

export default function Header() {
  return (
    <header className="header-hero">
      <nav className="nav">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Clone"
            className="logo-img"
          />
        </div>

        <ul className="nav-links">
          <li> Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Trending</li>
          <li className="user-profile">N</li>
        </ul>
      </nav>

      <div className="bg-container">
        <div className="nav-spacer"></div>
        <div className="hero-content">
          <h1 className="app-title">Stranger Things</h1>
          <h2 className="app-subtitle">
            When a young boy disappears, his friends, family and local police go on a frantic search to find him, aided by an strange girl with psychokinetic powers.
          </h2>
          <div className="email-input-container">
            <button className="btn-get-started">▶ Play</button>
            <button 
              className="btn-get-started" 
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', marginLeft: '10px' }}
            >
              ℹ More Info
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
