import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Logo from "./assets/logo.png";

function App() {
  return (
    <div className="container-fluid vh-100 w-100">{/*main div */}
      <div className="row row-cols-1 row-cols-md-2 align-items-start">{/*parent div */}
        <div className="col col-md-2 text-center bg-nav vh-100">{/*child div */}
          <Link className="my-2" to="/">
            <img src={Logo} alt="logo" className="img-fluid mt-3 logo" width={180} />
          </Link>
          <div className="my-3">
            <ul className="list-group text-start">
            <li className="list-group-item bg-transparent border-0 my-2">
              <Link className="fw-semibold mx-3 nav-link text-white" to="/" >Track</Link>
            </li>
            <li className="list-group-item bg-transparent border-0 my-2">
              <Link className="fw-semibold mx-3 nav-link text-white" to="podcast" >Podcast</Link>
            </li>
            <li className="list-group-item bg-transparent border-0 my-2">
              <Link className="fw-semibold mx-3 nav-link text-white" to="playlist" >Playlist</Link>
            </li>
            <li className="list-group-item bg-transparent border-0 my-2">
              <Link className="fw-semibold mx-3 nav-link text-white" to="album" >Album</Link>
            </li>
            </ul>
          </div>
        </div>
        <div className="col col-md-10 vh-100 overflow-y-auto bg-main">
          {/*child div */}
          <Outlet />
        </div>
      </div>
      {/*parent div */}
    </div>
  );
}

export default App;
