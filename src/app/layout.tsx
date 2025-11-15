'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Netflix Clone - Stream Your Favorite Shows & Movies</title>
        <meta name="description" content="Watch unlimited movies, shows, and more. Stream anywhere, cancel anytime." />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navigation */}
        <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Clone"
              className="logo-img"
            />
          </div>

          <ul className="nav-links">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Trending</li>
            <li className="user-profile">A</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="bg-container">
          <div className="nav-spacer"></div>
          <div className="hero-content">
            <h1 className="app-title">Unlimited movies, shows, and more</h1>
            <h2 className="app-subtitle">Ready to watch? </h2>
            <div className="email-input-container">
              <button className="btn-get-started">Get Started</button>
              <button className="btn-get-started" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', marginLeft: '10px' }}>ℹ More Info</button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {children}

        {/* Footer */}
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
      </body>
    </html>
  );
}
