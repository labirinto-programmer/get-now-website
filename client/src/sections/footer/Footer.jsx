import {Container} from '../../components/index';
import Logo from '../../assets/image/logo-img.png';
import {heroInfo, footerLinks, footerContact} from '../../data/dataInfo';
import {NavLink, Link} from 'react-router-dom';
import {getImg} from '../../utils/Helper';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='section'>
            <Container>
                <div className='footer-data d-flex'>
                    <div className='footer-content'>
                        <Link to='/' className='footer-logo'>
                            <img className='logo-img' src={Logo} alt='img of logo'/>
                        </Link>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur 
                            adipisicing elit. Impedit corporis libero 
                            alias consequatur quidem iusto natus vero 
                            doloremque animi voluptate.
                        </p>
                        <div className='footer-social d-flex'>
                            {heroInfo.map((link, index) => {
                                return(
                                    <NavLink className="footer-link d-flex" key={index}
                                    to={link.path}>{getImg(link.image, "footer-icon")}</NavLink>
                                )
                                })
                            }
                        </div>
                    </div>
                    <div className='footer-info d-flex'>
                        {footerLinks.map((item, index) => {
                            return (
                                <div className='info-box' key={index}>
                                    <h4>{item.title}</h4>
                                    <ul className='info-list'>
                                        {
                                            item.name.map((names, index) => {
                                                return (
                                                    <li key={index}>{names}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                            })
                        }
                        {footerContact.map((item, index) => {
                            return (
                                <div className='info-box' key={index}>
                                <h4>{item.title}</h4>
                                {item.info.map((text, index) => {
                                    return (
                                        <div className='info-box-item d-flex' key={index}>
                                            <span className='info-subtitle'>
                                                {text.nameFirst}
                                            </span>
                                            <span className='info-text'>
                                                {text.textFirst}
                                            </span>
                                        </div>
                                    )
                                })}
                                </div>
                            )
                            })
                        }
                    </div>
                </div>
                <hr className='border-light'/>
                <div className='footer-copyright d-flex'>
                    <p>
                        copyright &copy; getnow allright recived
                    </p>
                    <p>
                        terms & condition | privacy | support
                    </p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;