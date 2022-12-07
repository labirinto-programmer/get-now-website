import {Container, FormContaier, MainHeadForm, FormInput, BtnForm, FormLink, WidthContainer} from '../../components/index';
import './Register.css';

const Register = () => {
  return (
    <section className='register section'>
    <Container>
    <WidthContainer>
     <FormContaier>
            <MainHeadForm title='Hello Friend' description='Sing up with your information'/>
            <form className='form'>
                <FormInput type="text" placeholder="Your name" />
                <FormInput type="email" placeholder="Your Email" />
                <FormInput type="password" placeholder="Your Password"/>
                <FormInput type="password" placeholder="Confirem Password"/>
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