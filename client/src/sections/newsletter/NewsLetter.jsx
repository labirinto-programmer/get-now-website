import { Container } from '../../components/index';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <section className='newsletter section'>
        <Container>
            <div className='newsletter-container d-grid'>
                <div className='newsletter-data'>
                    <h3 className='newsletter-title'>Subscribe to our <br/>weakly Newsletter</h3>
                    <p className='newsletter-description'>Lorem ipsum dolor sit amet, consectetur, adipisicing elit.</p>
                </div>
                <div className='newsletter-subscribe'>
                    <div className='subscribe-box'>
                        <input className='border-thick' type="search" placeholder="Enter Email"/>
                        <input className='btn-primary' type="submit" value="subscribe"/>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default NewsLetter;