import {Container} from '../../components/index';
import {NavBar} from '../../components/index';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <NavBar/>
      </Container>
    </header>
  )
}

export default Header