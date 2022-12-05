import {Container, BtnPrimary} from '../../components/index';
import TotalImg from '../../assets/image/notepad-icon2.png'
import './Total.css';

const Total = () => {
  return (
    <section className='totle section'>
      <Container>
        <div className='totle-container'>
          <div className='totle-data'>
            <h2 className='totle-title'>Cart Total</h2>
            <table className='total-table border-light'>
              <tbody>
                <tr className="total-subtotal">
                  <th className='total-th'>Subtotal</th>
                  <td>$26.00</td>
                </tr>
                <tr className="order-total">
                  <th className='total-th'>Total</th>
                  <td className='total-total'><strong><span>$26.00</span></strong></td>
                </tr>
              </tbody>
            </table>
            <BtnPrimary title="Proceed to checkout"/>
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