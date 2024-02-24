import React from "react";

function Sidebar({toggleMenu,settoggleMenu}) {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar">
        
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={()=>settoggleMenu('Home')}>
            <a href="#" className={`nav-link text-white ${toggleMenu === 'Home' && 'active'}`} aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </a>
          </li>
          <li onClick={()=>settoggleMenu('CreatePost')}>
            <a href="#" className={`nav-link text-white ${toggleMenu === 'CreatePost' && 'active'}`}>
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              CreatePost
            </a>
          </li>
          <br/>
        <hr />
        </ul>
      </div>
    </>
  );
}
export default Sidebar;
