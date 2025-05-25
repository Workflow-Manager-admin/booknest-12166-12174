import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NotFound - 404 error page component
 * 
 * Displayed when a user navigates to a non-existent route
 * 
 * @returns {JSX.Element} The 404 page component
 */
const NotFound = () => {
  return (
    <div className="text-center py-5">
      <h1 className="display-1">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="lead mb-4">
        We couldn't find the page you were looking for.
      </p>
      <Link to="/" className="btn btn-primary">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
