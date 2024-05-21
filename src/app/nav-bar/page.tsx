"use client";

export default function Page() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-links">
            <li>
              <a href="/nav-bar">Aeon</a>
            </li>
            <li>
              <a href="/nav-bar">Showcase</a>
            </li>
            <li>
              <a href="/nav-bar">Docs</a>
            </li>
            <li>
              <a href="/nav-bar">Blog</a>
            </li>
            <li>
              <a href="/nav-bar">Analytics</a>
            </li>
            <li>
              <a href="/nav-bar">Template</a>
            </li>
            <li>
              <a href="/nav-bar">Enterprise</a>
            </li>
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
