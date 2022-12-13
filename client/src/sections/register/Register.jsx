import {Container, FormContaier, MainHeadForm, FieldForm, BtnForm, FormLink, WidthContainer} from '../../components/index';
import './Register.css';

const Register = () => {
  return (
    <section className='register section'>
    <Container>
    <WidthContainer>
     <FormContaier>
            <MainHeadForm title='Hello Friend' description='Sing up with your information'/>
            <form className='form'>
                <FieldForm title="Your Name" htmlFor='your-name'>
                  <input type='text'/>
                </FieldForm>
                <FieldForm title="Your Email" htmlFor='your-email'>
                  <input type='email'/>
                </FieldForm>
                <FieldForm title="Your Password" htmlFor='your-password'>
                  <input type='password'/>
                </FieldForm>
                <FieldForm title="Confirem Password" htmlFor='confirem'>
                  <input type='password'/>
                </FieldForm>
                <BtnForm title="Sing Up"/>
            </form>
            <FormLink text="Did have an account?" to="/login" title="Login"/>
        </FormContaier>
    </WidthContainer>
    </Container>
    </section>
  )
}

export default Register;