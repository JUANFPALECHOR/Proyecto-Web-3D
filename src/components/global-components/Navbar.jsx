import { useCallback } from 'react';
import { useAuth } from '../../pages/login/login-context/AuthContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { authUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    await logout();
    navigate("/");
  }, [logout, navigate]);

  return (
    <div className="navbar">
      <h2 className='nameTeam'>EcoVanguardia</h2>
      <nav>
        <ul className="navList">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          
        </ul>
        {authUser && (
            <>
              <div className="user-info">
                <img src={authUser?.photoURL} alt="User" className="user-photo" />
                <span>{authUser?.displayName}</span>
              </div>
              <li className="configurationLink"><Link to="/settings">Configuración</Link></li>
              <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
            </>
          )}
      </nav>
    </div>
  );
};

export default Navbar;