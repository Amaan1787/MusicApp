import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Track</Link>
        <Link class="nav-link" to="radio">Radio</Link>
        <Link class="nav-link" to="playlist">Playlist</Link>
        <Link class="nav-link " to="album">Album</Link>
      </div>
    </div>
  </div>
</nav>
<Outlet />
</div>
  );
}

export default App;
