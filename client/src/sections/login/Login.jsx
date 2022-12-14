import {Link} from 'react-router-dom';
import {Container, BtnForm, MainHeadForm, FormContaier, FormLink, WidthContainer, FieldForm} from '../../components/index';
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
          <WidthContainer>
            <FormContaier>
              <MainHeadForm title='Welcome Back' description='login with your email and password'/>
              <form className='form'>
                  <FieldForm title='Name' htmlFor='name'>
                    <input type='text'/>
                  </FieldForm>
                  <FieldForm title='Email' htmlFor='email'>
                    <input type='email'/>
                  </FieldForm>
                <div className='forgot-password'>
                  <Link to='/change'>forgot-password?</Link>
                </div>
                  <BtnForm title="Login"/>
              </form>
              <FormLink text="Don't have an account?" to="/register" title="SingUp" />
            </FormContaier>
          </WidthContainer>
        </Container>
    </section>
  )
}

export default Login;