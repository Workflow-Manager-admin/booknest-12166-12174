import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * MainContainer - Primary layout container for BookNest application
 * 
 * This component establishes the main application layout including:
 * - Responsive navigation header with dynamic links
 * - Content area for nested routing
 * - Support for authentication, book browsing, cart operations, and admin features
 * 
 * @returns {JSX.Element} The main container component
 */
const MainContainer = () => {
  // Example state that could be used for authentication status
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header/Navbar */}
      <header className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Brand/Logo */}
          <NavLink to="/" className="navbar-brand d-flex align-items-center">
            <span className="logo-symbol me-2">📚</span>
            <span>BookNest</span>
          </NavLink>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent" 
            aria-controls="navbarContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/books" className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }>
                  Books
                </NavLink>
              </li>
              {/* Cart link - could be conditionally rendered based on auth status */}
              <li className="nav-item">
                <NavLink to="/cart" className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }>
                  Cart
                </NavLink>
              </li>
              {/* Admin link - would typically be conditionally rendered based on user role */}
              <li className="nav-item">
                <NavLink to="/admin" className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }>
                  Admin
                </NavLink>
              </li>
            </ul>
            
            {/* Authentication Section */}
            <div className="d-flex">
              <NavLink to="/login" className={({ isActive }) => 
                `btn ${isActive ? 'btn-primary' : 'btn-outline-light'} me-2`
              }>
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-light">
                Register
              </NavLink>
              
              {/* Example of conditional rendering for logged-in state:
              {isLoggedIn ? (
                <button className="btn btn-outline-light" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <NavLink to="/login" className="btn btn-outline-light">
                  Login
                </NavLink>
              )}
              */}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area - This is where nested routes will render */}
      <main className="flex-grow-1 py-4">
        <div className="container">
          {/* Outlet renders the matched child route */}
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-light py-4 mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>BookNest</h5>
              <p className="small">Your online destination for quality books.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="small">&copy; {new Date().getFullYear()} BookNest. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainContainer;
