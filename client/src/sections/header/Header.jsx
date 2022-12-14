import {useState} from "react";
import {Container} from '../../components/index';
import {NavBar} from '../../components/index';
import './Header.css';

const Header = () => {
  const [headerScroll, setHeaderScroll] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 80){
      setHeaderScroll(true)
    }else {
      setHeaderScroll(false)
    }
  }
  window.addEventListener('scroll', changeBg)
  return (
    <header className={headerScroll ? 'header header-active' : 'header'}>
      <Container>
        <NavBar/>
      </Container>
    </header>
  )
}

export default Header