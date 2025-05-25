import React from 'react';

/**
 * Home - Landing page component for BookNest
 * 
 * Displays the welcome content and featured books
 * 
 * @returns {JSX.Element} The home page component
 */
const Home = () => {
  return (
    <div className="row">
      <div className="col-12 text-center mb-4">
        <h1 className="display-4">Welcome to BookNest</h1>
        <p className="lead">Discover your next favorite book from our extensive collection.</p>
        <hr className="my-4" />
      </div>
      
      <div className="col-12 mb-5">
        <div className="card bg-light">
          <div className="card-body">
            <h2 className="card-title h4">Featured Books</h2>
            <p>This is a placeholder for featured books carousel/grid that will be implemented.</p>
            <button className="btn btn-primary">Browse All Books</button>
          </div>
        </div>
      </div>
      
      <div className="col-md-6 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <h3 className="card-title h5">New Arrivals</h3>
            <p className="card-text">Check out the latest additions to our collection.</p>
          </div>
        </div>
      </div>
      
      <div className="col-md-6 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <h3 className="card-title h5">Best Sellers</h3>
            <p className="card-text">Explore our most popular books this month.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
