"use client";

import { useState } from "react";

export default function Page() {
  const [hide, setHide] = useState<boolean>(true);
  const hideMenu = () => {
    setHide(hide ? false : true);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-links">
            <li className="aeon">
              <a href="/nav-bar">
                <span className="aeon-text">Aeon</span>
              </a>
              {!hide && (
                <span onClick={hideMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 cancel-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              )}
              {hide && (
                <span onClick={hideMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 hamburger-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </span>
              )}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 search-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>
            </li>
            {!hide && (
              <li className="other-menu">
                <a href="/nav-bar">Showcase</a>
              </li>
            )}
            {!hide && (
              <li className="other-menu">
                <a href="/nav-bar">Docs</a>
              </li>
            )}
            {!hide && (
              <li className="other-menu">
                <a href="/nav-bar">Blog</a>
              </li>
            )}
            {!hide && (
              <li className="other-menu">
                <a href="/nav-bar">Analytics</a>
              </li>
            )}
            {!hide && (
              <li className="other-menu">
                <a href="/nav-bar">Template</a>
              </li>
            )}
            {!hide && (
              <li className="other-menu">
                <a href="/nav-bar">Enterprise</a>
              </li>
            )}
          </ul>

          <form className="search-form">
            <input
              type="search"
              placeholder="Search Documentation..."
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </>
  );
}
