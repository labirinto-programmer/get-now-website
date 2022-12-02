import {Container, Card, BtnPrimary} from '../../components/index';
import {getImg} from '../../utils/Helper';
import data from "../../data/food.json";
import './FavoritePage.css';

const FavoritePage = () => {
    return (
        <section className='favorite section'>
            <Container>
                <div className='favorite-container'>
                    <div className='favorite-menu d-grid'>
                        {
                            data.map((item) => {
                                return <Card key={item.id}>
                                    <div className='food-img'>
                                        {getImg(item.imagePath)}
                                    </div>
                                    <h4>
                                        {item.foodName}
                                    </h4>
                                    <p>
                                        {item.description}
                                    </p>
                                    <div className='food-box d-flex'>
                                        <span>
                                            {item.price}
                                        </span>
                                        <BtnPrimary path='/cart' title='add to cart' />
                                    </div>
                                </Card>
                            })
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FavoritePage;