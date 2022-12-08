import {Container} from '../../components/index';
import erroricon from '../../assets/image/error-icon.png';
import {BtnError} from '../../components/index';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <section className='not-found section'>
            <Container>
                <div className='not-found-container'>
                    <h2>
                        404
                    </h2>
                    <p>
                        page not found
                    </p>
                    <div className='not-found-img'>
                        <img src={erroricon} alt='error-icon' />
                    </div>
                    <BtnError path='/' title='back to the home page' />
                </div>
            </Container>
        </section>
    )
}

export default NotFoundPage;