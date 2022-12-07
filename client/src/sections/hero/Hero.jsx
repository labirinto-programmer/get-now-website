import {NavLink} from 'react-router-dom';
import {Container} from '../../components/index';
import {BtnPrimary, BtnSecondary, BtnContaier} from '../../components/index';
import {getImg} from '../../utils/Helper';
import {heroInfo} from '../../data/dataInfo';
import heroImg from '../../assets/image/hero-img.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section">
        <Container>
            <div className="hero-container section-container d-grid">
                <div className="hero-data">
                    <h1 className="hero-title">
                        Just wait you will <br/>
                        get food at your door
                    </h1>
                    <p className="hero-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Qui magni delectus tenetur autem, sint veritatis!
                    </p>
                    <BtnContaier>
                        <BtnPrimary title='order now' path='/all'></BtnPrimary>
                        <BtnSecondary title='go to'></BtnSecondary>
                    </BtnContaier>
                    <div className="hero-social d-flex">
                    {heroInfo.map((link, index) => {
                        return(
                            <NavLink className="hero-link" key={index}
                            to={link.path}>{getImg(link.image, "hero-icon")}</NavLink>
                        )
                        })
                    }
                    </div>
                </div>
                <div className="hero-img">
                    <img src={heroImg} alt="Img of Hero"/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Hero