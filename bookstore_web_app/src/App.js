import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import the MainContainer component
import MainContainer from './components/MainContainer/MainContainer';

// Import page components
import Home from './pages/Home';
import NotFound from './pages/NotFound';

/**
 * App - Root application component
 * 
 * Sets up the routing structure using React Router and the MainContainer
 * layout wrapper. This architecture allows for:
 * 1. Consistent layout across all pages
 * 2. Nested routing for different sections
 * 3. Easy addition of new pages and features
 * 
 * @returns {JSX.Element} The root App component with routing configuration
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
          Main application routes wrapped in MainContainer layout
          The MainContainer provides the consistent navigation and footer
          while the <Outlet /> within it renders the matched child route
        */}
        <Route path="/" element={<MainContainer />}>
          {/* Home page (index route) */}
          <Route index element={<Home />} />
          
          {/* Example routes for future implementation */}
          <Route path="books" element={<div className="p-5 text-center bg-light"><h2>Books Page</h2><p>This page will display book catalog</p></div>} />
          <Route path="cart" element={<div className="p-5 text-center bg-light"><h2>Shopping Cart</h2><p>This page will show the user's cart</p></div>} />
          <Route path="login" element={<div className="p-5 text-center bg-light"><h2>Login</h2><p>Authentication form will be here</p></div>} />
          <Route path="register" element={<div className="p-5 text-center bg-light"><h2>Register</h2><p>User registration form will be here</p></div>} />
          <Route path="admin" element={<div className="p-5 text-center bg-light"><h2>Admin Dashboard</h2><p>Admin controls will be here</p></div>} />
          
          {/* 404 Not Found page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
