import './Cart.css';
import {Container, MainHeading} from '../../components/index';
import CloseIcon from '../../assets/image/close-icon.png';
import CartImg from '../../assets/image/image2.png';

const Cart = () => {
  return (
      <section className='cart section'>
        <Container>
            <div className='cart-container section-container'>
            <MainHeading title='Cart'/>
                <table className='cart-table'>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>sobtatle</th>
                      <th></th>
                    </tr>
                  </thead>
                <tbody>
                  <tr>
                    <td className='prodect-img'><img className='cart-img' src={CartImg} alt="img of prodect"/></td>
                    <td className='prodect-name' data-title='Name&#58;'>Product</td>
                    <td className='prodect-price' data-title='Price&#58;'>$50.00</td>
                    <td className='prodect-quantity' data-title='Quantity&#58;'><select className="cart__nums border-light cart-select"><option>11</option></select></td>
                    <td className='prodect-subtotal' data-title='sobtatle&#58;'>$12.00</td>
                    <td className='prodect-icon'><img className='cart-icon' src={CloseIcon} alt="img of prodect"/></td>
                  </tr>
                  <tr>
                    <td className='prodect-img'><img className='cart-img' src={CartImg} alt="img of prodect"/></td>
                    <td className='prodect-name' data-title='Name&#58;'>Product</td>
                    <td className='prodect-price' data-title='Price&#58;'>$50.00</td>
                    <td className='prodect-quantity' data-title='Quantity&#58;'><select className="cart__nums border-light cart-select"><option>11</option></select></td>
                    <td className='prodect-subtotal' data-title='sobtatle&#58;'>$12.00</td>
                    <td className='prodect-icon'><img className='cart-icon' src={CloseIcon} alt="img of prodect"/></td>
                  </tr>
                </tbody>
                </table>
            </div>
        </Container>
    </section>
  )
}

export default Cart;