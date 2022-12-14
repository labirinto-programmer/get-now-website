import {Container, BtnForm, MainHeading} from '../../components/index';
import {getImg} from '../../utils/Helper';
import {contactInfo} from "../../data/dataInfo.jsx";
import './ContactPage.css';

const Contact = () => {
    return (
        <section className='contact section'>
            <Container>
                <div className='contact-content section-container'>
                <MainHeading title='Contact'/>
                    <div className='contact-box d-flex'>
                        <div className='contact-social'>
                        {
                            contactInfo.map((item, index) => {
                                return <div className='social-box d-flex' key={index}>
                                    <div className='social-img'>
                                        {getImg(item.image)}
                                    </div>
                                    <span>
                                        {item.text}
                                    </span>
                                </div>
                            })
                        }
                        </div>
                        <form className='contact-form'>
                            <div className='form-box d-flex'>
                                <input className='border-light' type="text" placeholder="your name" />
                                <input className='border-light' type="email" placeholder="your email" />
                                <textarea className='border-light' cols="30" rows="10" placeholder="your message"></textarea>
                                <BtnForm title='send' />
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contact;