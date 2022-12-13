import './Tables.css';

export const TotalTable = (props) => {
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
  </div>
  )
}
export const TabTable = (props) => {
  return (
    <table className='tab-table'>
      <tbody>
        <tr>
            <th>diet type</th>
            <td><p>Gluten Free, Vegan, Vegetarian</p></td>
        </tr>
        <tr>
            <th>Ingredients</th>
            <td><p>Almond Butter, Dates, Fig, Mango</p></td>
        </tr>
    </tbody>
    </table>
  )
}

