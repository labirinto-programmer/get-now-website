import { useState } from 'react';
import { Container, FormContaier, MainHeadForm, BtnForm, FieldInput, WidthContainer, SelectedInput} from '../../components/index';
import './Payment.css';

const Payment = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // const [expiry, setExpiry] = useState('');
  // const [cvv, setCvv] = useState('');
  // const [focus, setFocus] = useState('');
  return (
    <section className='payment section'>
        <Container>
            <WidthContainer>
              <FormContaier>
                  <MainHeadForm title='Credit Card' description='wrait your information card'/>
                  <form className='form'>
                      <FieldInput title='Card Number' type='number' />
                      <FieldInput title='Card Holder name' type='text' />
                      <div className='choose d-flex'>
                      <SelectedInput title="Expiration MM">
                          <select className='payment-selected'>
                            <option>Month</option>
                            <option>12/03</option>
                            <option>12/03</option>
                          </select>
                      </SelectedInput>
                      <SelectedInput title="Expiration YY">
                          <select className='payment-selected'>
                            <option>Year</option>
                            <option>12/03</option>
                            <option>12/03</option>
                          </select>
                      </SelectedInput>
                      <FieldInput title='CVV' type='number' />
                      </div>
                      <BtnForm title="Payment"/>
                  </form>
              </FormContaier>
            </WidthContainer>
        </Container>
    </section>
  )
}

export default Payment