import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">HEM</Link></li>
        <li><Link to="/meny">MENY</Link></li>
		<li><Link to="/om-oss">OM OSS</Link></li>
		<li><Link to="/hitta-hit">HITTA HIT</Link></li>
        <li><Link to="/kontakta-oss">KONTAKTA OSS</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;

