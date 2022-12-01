import {About, AboutShow, NewsLetter} from "../../sections/index";
import "./AboutPage.css";

const AboutPage = () => {
    return (
        <section className="about section">
            <About />
            <AboutShow />
            <NewsLetter/>
        </section>
    );
};

export default AboutPage;
