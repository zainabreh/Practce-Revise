import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar">
        
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link to="/create-post" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              CreatePost
            </Link>
          </li>
          <br/>
        <hr />
        </ul>
      </div>
    </>
  );
}
export default Sidebar;
