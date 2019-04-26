import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Users() {
  return <h2>Users</h2>;
}

function User_details() {
  return <h2>User_details</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Users</Link>
            </li>
            <li>
              <Link to="/about/">User_details</Link>
            </li>
            
          </ul>
        </nav>

        <Route path="/" exact component={Users} />
        <Route path="/user_details/" component={User_details} />

      </div>
    </Router>
  );
}

export default AppRouter;