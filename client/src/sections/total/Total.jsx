import {Container, TotalTable, BtnContaier, BtnPrimary} from '../../components/index';
import TotalImg from '../../assets/image/notepad-icon2.png';
import './Total.css';

const Total = () => {
  return (
    <section className='totle section'>
      <Container>
        <div className='totle-container'>
          <div className='totle-data'>
            <TotalTable title= 'Cart Total'/>
            <BtnContaier>
              <BtnPrimary title="Continue Shopping" path="/all" />
              <BtnPrimary title="Checkout" path="/checkout"/>
            </BtnContaier>
          </div>
          <div className='totle-img'>
            <img src={TotalImg} alt='img of totle'/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Total