import React from 'react';

const Navbar = () => {
  const searchStyle = {
    marginRight: '10px', 
    borderRadius: '0.25rem', 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
      <a className="navbar-brand" href="/">ReactApp</a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/card">Card</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
      <form className="form-inline" style={{ marginLeft: 'auto' }}>
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" style={searchStyle} />
          <div className="input-group-append">
            <button className="btn btn-outline-light" type="submit">Search</button>
          </div>
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
