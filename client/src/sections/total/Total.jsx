import {Container, TotalTable} from '../../components/index';
import TotalImg from '../../assets/image/notepad-icon2.png';
import './Total.css';

const Total = () => {
  return (
    <section className='totle section'>
      <Container>
        <div className='totle-container'>
          <div className='totle-data'>
            <TotalTable 
            title= 'Cart Total' 
            titleBtnEst="Continue Shopping" 
            titleBtnEnd="Checkout"
            />
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