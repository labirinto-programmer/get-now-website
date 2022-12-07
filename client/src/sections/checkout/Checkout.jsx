import {useState} from 'react';
import {Container, GridContainer, Dropdown, TotalTable} from '../../components/index';
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
                <div className='checkout-form d-flex'>
                    <p className='checkout-box checkout-name'>
                        <label htmlFor='frist-name' className='checkout-subtitle'>
                            First name&nbsp;
                            <abbr className="checkout-required" title="required">*</abbr>
                        </label>
                        <span className='checkout-info'>
                            <input type="text" className='checkout-input'/>
                        </span>
                    </p>
                    <p className='checkout-box checkout-name'>
                        <label htmlFor='last-name' className='checkout-subtitle'>
                            Last name&nbsp;
                            <abbr className="checkout-required" title="required">*</abbr>
                        </label>
                        <span className='checkout-info'>
                            <input type="text" className='checkout-input'/>
                        </span>
                    </p>
                    <p className='checkout-box'>
                        <label htmlFor='country-name' className='checkout-subtitle'>
                            Country&nbsp;
                            <abbr className="checkout-required" title="required">*</abbr>
                        </label>
                        <span className='checkout-info'>
                        <Dropdown selected={selected} setSelected={setSelected} data={data}/>
                        </span>
                    </p>
                    <p className='checkout-box'>
                        <label htmlFor='city-name' className='checkout-subtitle'>
                            City&nbsp;
                            <abbr className="checkout-required" title="required">*</abbr>
                        </label>
                        <span className='checkout-info'>
                            <input type="text" className='checkout-input'/>
                        </span>
                    </p>
                    <p className='checkout-box'>
                        <label htmlFor='street-name' className='checkout-subtitle'>
                            Street address&nbsp;
                            <abbr className="checkout-required" title="required">*</abbr>
                        </label>
                        <span className='checkout-info'>
                            <input type="text" className='checkout-input'/>
                        </span>
                    </p>
                    <p className='checkout-box'>
                        <label htmlFor='phone-name' className='checkout-subtitle'>
                            Phone&nbsp;
                            <abbr className="checkout-required" title="required">*</abbr>
                        </label>
                        <span className='checkout-info'>
                            <input type="number" className='checkout-input'/>
                        </span>
                    </p>
                    <p className='checkout-box'>
                        <label htmlFor='postcode-name' className='checkout-subtitle'>
                            Email&nbsp;
                            <abbr className="checkout-required" title="required">*</abbr>
                        </label>
                        <span className='checkout-info'>
                            <input type="email" className='checkout-input'/>
                        </span>
                    </p>
                    <p className='checkout-box'>
                        <label htmlFor='postcode-name' className='checkout-subtitle'>
                            Postcode&nbsp;
                            <abbr className="checkout-required" title="required">*</abbr>
                        </label>
                        <span className='checkout-info'>
                            <input type="number" className='checkout-input'/>
                        </span>
                    </p>
                </div>
                <TotalTable title='your order' titleBtnEst="Cancle" titleBtnEnd="Place order" >
                    <tr className="total-subtotal">
                        <th className='total-th order-name'>Pizza&nbsp;<span className='order-nums'>x1</span></th>
                        <td>$14</td>
                    </tr>
                    <tr className="total-subtotal">
                        <th className='total-th order-name'>Pizza&nbsp;<span className='order-nums'>x3</span></th>
                        <td>$14</td>
                    </tr>
                </TotalTable>
            </GridContainer>
        </form>
        </Container>
    </section>
  )
}

export default Checkout