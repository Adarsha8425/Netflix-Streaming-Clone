'use client';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Help</h4>
            <ul>
              <li>Account</li>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Media Center</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>Privacy</li>
              <li>Terms of Use</li>
              <li>Cookie Preferences</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Account</h4>
            <ul>
              <li>Sign In</li>
              <li>Sign Up</li>
              <li>Manage Profile</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Netflix Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
