import {useState} from 'react';
import {Container, GridContainer, Dropdown, TotalTable, FormContaier, MainHeadForm, BtnFormTable, BtnPrimary, BtnContaier, BtnSecondary, FieldForm} from '../../components/index';
import countriesData from '../../data/countries.json';
import './Checkout.css';

const Checkout = () => {
    const [selected, setSelected] = useState("Choose One");
    const data = countriesData;
  return (
    <section className='checkout section'>
        <Container>
            <form>
                <GridContainer className="section-container">
                    <FormContaier >
                    <MainHeadForm title='Infomation' description='wraite your information' />
                    <div className='checkout-form d-flex'>
                    <div className='checkout-wrap d-flex'>
                    <FieldForm title='First name' htmlFor='first-name' >
                           <input type="text" />
                        </FieldForm>
                        <FieldForm title='Last name' htmlFor='first-name' >
                           <input type="text" />
                        </FieldForm>
                    </div>
                        <FieldForm title='Country' htmlFor='country-name' >
                          <Dropdown selected={selected} setSelected={setSelected} data={data}/>
                        </FieldForm>
                        <FieldForm title='City' htmlFor='city-name' >
                           <input type="text" />
                        </FieldForm>
                        <FieldForm title='Street address' htmlFor='street-name' >
                           <input type="text" />
                        </FieldForm>
                        <FieldForm title='Phone' htmlFor='phone-name' >
                          <input type="number"/>
                        </FieldForm>
                        <FieldForm title='Email' htmlFor='email-name' >
                          <input type="email"/>
                        </FieldForm>
                        <FieldForm title='Postcode' htmlFor='postcode-name' >
                          <input type="number"/>
                        </FieldForm>
                    </div>
                    </FormContaier>
                    <div>
                    <TotalTable title='your order'>
                        <tr className="total-subtotal">
                            <th className='total-th order-name'>Pizza&nbsp;<span className='order-nums'>x1</span></th>
                            <td>$14</td>
                        </tr>
                        <tr className="total-subtotal">
                            <th className='total-th order-name'>Pizza&nbsp;<span className='order-nums'>x3</span></th>
                            <td>$14</td>
                        </tr>
                    </TotalTable>
                    <BtnContaier>
                        <BtnSecondary title="Cancle" path="/home" />
                        <BtnFormTable title="Place order" />
                    </BtnContaier>
                    </div>
                </GridContainer>
            </form>
        </Container>
    </section>
  )
}

export default Checkout