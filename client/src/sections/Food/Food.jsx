import { NavLink } from "react-router-dom";

import {MainTitle} from '../../components/index';
import {Container} from '../../components/index';
import {Card} from '../../components/index';
import {BtnPrimary, BtnSecondary} from '../../components/index';
import {getImg} from '../../utils/Helper';

import arrowleft from '../../assets/image/arrow-left.png';
import arrowright from '../../assets/image/arrow-right.png';

import {nums} from "../../data/dataInfo.jsx";
import {lists} from "../../data/dataInfo.jsx";
import data from "../../data/food.json";

import './Food.css';

const Food = () => {
    return (
        <>
        <section className='food section'>
            <MainTitle>
                foods
            </MainTitle>
            <Container>
                <div className='food-data d-flex'>
                    <div className='food-list'>
                        <h3>
                            categories
                        </h3>
                        <ul className='d-flex'>
                            {lists.map((item, index) => {
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
                                            <BtnPrimary path={item.id} title='add to cart'>
                                            </BtnPrimary>
                                        </div>
                                    </Card>
                                })
                            }
                        </div>
                        <div className='food-btns d-flex'>
                            <BtnSecondary title=<img src={arrowright} alt={arrowright} />>
                            </BtnSecondary>
                            {nums.map((item, index) => {
                                return(
                                    <BtnSecondary key={index}
                                    className={({isActive}) => isActive ? 'active' : 'k'}
                                    path={item.path} title={item.num}></BtnSecondary>
                                )
                                })
                            }
                            <BtnSecondary title=<img src={arrowleft} alt={arrowleft} />>
                            </BtnSecondary>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}

export default Food;