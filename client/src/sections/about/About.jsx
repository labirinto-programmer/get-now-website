import {MainHeading, Container} from "../../components/index";
import framedelivery from "../../assets/image/frame-delivery.png";
import signature from "../../assets/image/signature.png";
import "./About.css";

const About = () => {
    return (
        <div className="about-container section-container">
            <MainHeading title='about us'>
            </MainHeading>
            <Container>
                <div className="about-data d-flex">
                    <div className="about-img">
                        <img src={framedelivery} alt="framedelivery" />
                    </div>
                    <div className="about-content">
                        <p>
                            Non numquam eius modi tempora incidunt ut labore et dolore magnam
                            aliquam quaerat voluptatem. Ut aut reiciendis voluptatibus maiores
                            alias consequatur aut perferendis doloribus asperiores repellat.
                            Architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p>
                            Temporibus autem quibusdam et aut officiis debitis aut rerum
                            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                            molestiae non recusandae. Et harum quidem rerum facilis est et
                            expedita distinctio.
                        </p>
                        <div className="content-img">
                            <img src={signature} alt="signature" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;