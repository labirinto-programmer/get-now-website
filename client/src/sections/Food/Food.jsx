import {NavLink} from "react-router-dom";
import {MainHeading, Container, Card, BtnPrimary, NumbersBtn} from '../../components/index';
import {getImg} from '../../utils/Helper';
import {lists} from "../../data/dataInfo.jsx";
import data from "../../data/food.json";
import './Food.css';

const Food = () => {
    return (
        <>
        <section className='food section'>
            <MainHeading title='food'>
            </MainHeading>
            <Container>
                <div className='food-data d-flex'>
                    <div className='food-list'>
                        <h3>
                            categories
                        </h3>
                        <ul className='d-flex'>
                            {
                                lists.map((item, index) => {
                                    return (
                                        <NavLink key={index} className={({ isActive }) =>
                                        isActive ? 'd-flex border-light active' : 'd-flex border-light'}
                                        to={item.name}>
                                        {getImg(item.path)}
                                        {item.name}</NavLink>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='food-menu'>
                        <div className='food-content d-grid'>
                            {
                                data.slice(0, 6).map((item) => {
                                    return <Card key={item.id}>
                                        <div className='card-img'>
                                            {getImg(item.imagePath)}
                                        </div>
                                        <h4>
                                            {item.foodName}
                                        </h4>
                                        <p>
                                            {item.description}
                                        </p>
                                        <div className='card-box d-flex'>
                                            <span>
                                                {item.price}
                                            </span>
                                            <BtnPrimary path='/details' title='read more' />
                                        </div>
                                    </Card>
                                })
                            }
                        </div>
                        <NumbersBtn />
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}

export default Food;