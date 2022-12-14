import { useState } from 'react';
import { Container, TabTable, FieldForm, BtnForm, MainHeadForm, FieldContainer} from '../../components/index';
import PersonIcon from '../../assets/image/icon-user.png';
import StarsBgIcon from '../../assets/image/stars.png'
import StarsIcon from '../../assets/image/starsbg.png'
import './Tab.css';

const Tab = () => {
  const [tab, setTab] = useState('desc');
  return (
    <section className='tab'>
      <Container>
        <div className='tab-container'>
          <ul className="tab-list">
            <li className={` ${tab === "desc" ? "tab__active tab-addtitle" : "tab-addtitle"}`}
              onClick={() => setTab("desc")}>
              <h6 className='tab-title'>Additional information</h6>
            </li>
            <li className={` ${tab === "rev" ? "tab__active" : ""}`}
              onClick={() => setTab("rev")}>
              <h6 className='tab-title'>Reviews (0)</h6>
            </li>
          </ul>
          {tab === "desc" ? (
            <div className='tab-content'>
              <TabTable />
            </div>
          ) : (<div className='tab-form'>
            <div className="review">
              <h2 className='review-title'>Reviews</h2>
              <div className="review-content">
                <div className='review-card'>
                  <span className='review-stars'>
                    <img className='review-icon' src={StarsBgIcon} alt='img of stars' />
                    <img className='review-icon' src={StarsBgIcon} alt='img of stars' />
                    <img className='review-icon' src={StarsBgIcon} alt='img of stars' />
                    <img className='review-icon' src={StarsBgIcon} alt='img of stars' />
                  </span>
                  <p className="user-name">Jhon Doe</p>
                  <p className="user-email">jhon1@gmail.com</p>
                  <p className='review-text'>
                    Iste Minima, Deserunt, Ipsam Tempore Amet Unde Repellendus Veritatis Architecto Ipsum, Similique Perferendis Illo Totam Magnam Commodi Fuga Illum Expedita!</p>
                  <div className='review-img'>
                    <img src={PersonIcon} alt='img of icon' />
                  </div>
                </div>
                <div className='review-card'>
                  <span className='review-stars'>
                    <img className='review-icon' src={StarsBgIcon} alt='img of stars' />
                    <img className='review-icon' src={StarsBgIcon} alt='img of stars' />
                    <img className='review-icon' src={StarsBgIcon} alt='img of stars' />
                    <img className='review-icon' src={StarsBgIcon} alt='img of stars' />
                  </span>
                  <p className="user-name">Jhon Doe</p>
                  <p className="user-email">jhon1@gmail.com</p>
                  <p className='review-text'>
                    Iste Minima, Deserunt, Ipsam Tempore Amet Unde Repellendus Veritatis Architecto Ipsum, Similique Perferendis Illo Totam Magnam Commodi Fuga Illum Expedita!</p>
                  <div className='review-img'>
                    <img src={PersonIcon} alt='img of icon' />
                  </div>
                </div>
              </div>
              <form className='review-form'>
              <MainHeadForm 
                title='Add a review'
                description='Your email address will not be published.'/>
                <FieldContainer>
                <div className='comment-container'>
                <FieldForm title='Rating'>
                  <span className='review-stars'>
                    <img className='review-icon' src={StarsIcon} alt='img of stars' />
                    <img className='review-icon' src={StarsIcon} alt='img of stars' />
                    <img className='review-icon' src={StarsIcon} alt='img of stars' />
                    <img className='review-icon' src={StarsIcon} alt='img of stars' />
                  </span>
                  </FieldForm>
                  <FieldForm title="Name" >
                    <input type="text" className='checkout-input' />
                  </FieldForm>
                  <FieldForm title="Email" >
                    <input type="email" className='checkout-input' />
                  </FieldForm>
                  <FieldForm title="Your review" >
                    <textarea>
                    </textarea>
                  </FieldForm>
                  {/* <p className="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" checked=""/> <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p> */}
                  <BtnForm title='Submit' />
                </div>
                </FieldContainer>
              </form>
            </div>
          </div>)
          }
        </div>
      </Container>
    </section>
  )
}

export default Tab