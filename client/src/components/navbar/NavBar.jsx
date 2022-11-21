import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {links} from '../../data/dataInfo';
import Logo from '../../assets/image/logo-img.png';
import HeartIcon from '../../assets/image/heart-icon.png';
import CartIcon from '../../assets/image/cart-icon.png';
import UserIcon from '../../assets/image/user-icon.png';
import MenuIcon from '../../assets/image/menu-icon.png';
import CloseIcon from '../../assets/image/close-icon.png';
import './NavBar.css';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='nav d-flex'>
      <Link to='/' className='nav-logo'>
        <img className='logo-img' src={Logo} alt='img of logo'/>
      </Link>
      <div className={`nav-menu ${showMenu ? 'show-menu' : ''}`}>
        <ul className="nav-bar">
          {links.map((link, index) => {
              return(
                <li className="nav-item" key={index}><NavLink 
                className={({isActive}) => isActive ? 'nav-link nav-active-line active-link' : 'nav-link'}
                to={link.path}>{link.name}</NavLink></li>
              )
            })
          }
        </ul> 
      </div>
      <div className="nav-icons">
          <Link to='/cart' className='heart-icon'>
            <img className="nav-icon" src={HeartIcon} alt="" />
            <span className='heart-notification'></span>
          </Link>
          <Link to='/cart' className='cart-icon'>
            <img className="nav-icon" src={CartIcon} alt="" />
            <span className='cart-badge'>0</span>
          </Link>
          <Link to='/login'>
            <img className="nav-icon" src={UserIcon} alt="" />
          </Link>
          <Link onClick={() => setShowMenu(!showMenu)}>
          {
            showMenu ? <img className="nav-icon nav-toggle" src={CloseIcon} alt="" /> : <img className="nav-icon nav-toggle" src={MenuIcon} alt="" />
          }
          </Link>
      </div>
    </nav>
  )
}

export default NavBar