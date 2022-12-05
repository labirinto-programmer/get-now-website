import {useState} from 'react';
import {Container, BtnForm, GridContainer, Dropdown} from '../../components/index';
import citiesData from '../../data/cities.json';
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
                <div className='checkout-total'>
                    <table className='checkout-table'>
                        <thead>
                            <tr><th>fddfg</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>dsfdsfsdf</td></tr>
                        </tbody>
                    </table>
                    <BtnForm title="Payment"/>
                </div>
            </GridContainer>
        </form>
        </Container>
    </section>
  )
}

export default Checkout