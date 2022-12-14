import {Container, MainHeading} from '../../components/index';
import {servicesInfo} from '../../data/dataInfo';
import {getImg} from '../../utils/Helper';
import './Services.css';

const Services = () => {
  return (
    <section className="services section">
        <MainHeading 
            title="Our Services" 
            text="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos Ut Explicabo, Numquam Iusto Est A Ipsum Assumenda Tempore Esse Corporis?">
        </MainHeading>
        <Container>
            <div className="services-container">
                <div className="services-cards d-grid">
                {servicesInfo.map((icon, index) => {
                    return(
                        <div className='services-card' key={index}>
                            <div className="services-content border-thick">
                                {getImg(icon.image, "services-icon")}
                                <h4>{icon.name}</h4>
                            </div>
                        </div>
                        )
                    })
                }
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Services;