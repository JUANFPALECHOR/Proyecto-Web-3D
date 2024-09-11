import { useState, useEffect, useRef } from 'react';
import { useCallback } from 'react';
import { useAuth } from '../../pages/login/login-context/AuthContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { authUser, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Referencia para el menú desplegable

  const handleLogout = useCallback(async () => {
    await logout();
    navigate("/");
  }, [logout, navigate]);

  // Manejar el clic en "Usuario"
  const toggleDropdown = (e) => {
    e.stopPropagation(); // Evitar que el evento de clic se propague y cierre el menú
    setDropdownOpen(!dropdownOpen);
  };

  // Cerrar el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Cierra el menú si haces clic fuera de él
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="navbar">
      <h2 className="logo">Logo</h2>
      <nav>
        <ul className="navList">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
        {authUser && (
          <div className="user-dropdown" ref={dropdownRef}>
            <span onClick={toggleDropdown} className="user-dropdown-link">Usuario</span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <div className="user-info">
                    <img src={authUser?.photoURL} alt="User" className="user-photo" />
                    <span>{authUser?.displayName}</span>
                  </div>
                </li>
                <li className="dropdown-item"><Link to="/settings">Configuración</Link></li>
                <li className="dropdown-item"><a href="#" onClick={handleLogout}>Cerrar Sesión</a></li>
              </ul>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
