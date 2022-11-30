import {Link} from 'react-router-dom';
import {Container, BtnForm, FormInput, MainHeadForm, FormContaier, FormLink} from '../../components/index';
import './Login.css';

const Login = () => {
  // const [inpval, setInpval] = useState({
  //   name:"",
  //   password:""
  // })
  // const getData = (e) => {
  //   console.log(e.target.value)
  // }
  return (
    <section className='login section'>
        <Container>
          <FormContaier>
            <MainHeadForm title='Welcome Back' description='login with your email and password'/>
            <form className='form'>
              <FormInput type="email" placeholder="Email" />
              <FormInput type="password" placeholder="Password"/>
              <div className='forgot-password'>
                <Link to='/change'>forgot-password?</Link>
              </div>
              <BtnForm title="Login"/>
            </form>
            <FormLink text="Don't have an account?" to="/register" title="SingUp" />
          </FormContaier>
        </Container>
    </section>
  )
}

export default Login