import React from 'react';
import './header.css';




function Header() {
  return (
    <div className="header">
        <div className="page">
            <a href="#enzo">Enzo</a>
        </div>
        <div className="justify-content-center">
        <h3>année scolaire 2020/2021</h3>

        </div>
        <ul className="nav justify-content-end">
  <li className="nav-item">
    
    <a href="#paramétre" className="nav-link active">paramétrage <i className="fa fa-share" aria-hidden="true"></i></a>

  </li>
  <li className="nav-item">
  <a href="#paramétre" className="nav-link active">tableau du bord  <i className="fa fa-share" aria-hidden="true"></i></a>

  </li>
  <li className="nav-item">
  <a href="#paramétre" className="nav-link active">Déconnexion <i className="fa fa-share" aria-hidden="true"></i></a>

  </li>
 
</ul>
      
    </div>
  );
}

export default Header;