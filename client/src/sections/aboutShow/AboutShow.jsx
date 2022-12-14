import {Container} from "../../components/index";
import deliveryicon from "../../assets/image/delivery-icon.png";
import video from "../../assets/video/delivery.mp4";
import "./AboutShow.css";

const AboutShow = () => {
    return (
        <div className="about-show section">
                <Container>
                    <div className="about-box d-flex">
                        <div className="about-description">
                            <h3>
                                learn more
                            </h3>
                            <p>
                                Non numquam eius modi tempora incidunt ut labore et dolore magnam
                                aliquam quaerat voluptatem. Ut aut reiciendis voluptatibus maiores
                                alias consequatur aut perferendis doloribus asperiores repellat.
                                Architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <div className="description-img">
                                <img src={deliveryicon} alt='deliveryicon' />
                            </div>
                        </div>
                        <div className="about-video">
                            <div className="vides-bcimg d-flex">
                                <video loop muted autoPlay>
                                    <source src={video} type='video/mp4' />
                                </video>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
    );
};

export default AboutShow;