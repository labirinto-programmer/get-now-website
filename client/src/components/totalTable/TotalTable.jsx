import {BtnPrimary} from '../index';
import './TotalTable.css';

const TotalTable = (props) => {
  return (
    <div className='table-container'>
        <h2 className='table-title'>{props.title}</h2>
        <table className='total-table border-light'>
          <tbody>
              {props.children}
              <tr className="total-subtotal">
                <th className='total-th'>Taxes</th>
                <td>$5.00</td>
              </tr>
              <tr className="total-subtotal">
                <th className='total-th'>Dliverly</th>
                <td>$10.00</td>
              </tr>
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
        <div className='table-btn'>
          <BtnPrimary title={props.titleBtnEst}/>
          <BtnPrimary title={props.titleBtnEnd}/>
        </div>
  </div>
  )
}

export default TotalTable