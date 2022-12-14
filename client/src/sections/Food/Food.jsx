import {useState} from "react";
import {NavLink} from "react-router-dom";
import {MainHeading, Container, MainCard, BtnPrimary, NumbersBtn, Popup, BtnSecondary} from '../../components/index';

import popupicon from "../../assets/image/popup-icon.png";

import {getImg} from '../../utils/Helper';
import {lists} from "../../data/dataInfo.jsx";
import data from "../../data/food.json";
import './Food.css';

const Food = () => {
    const [showPopup, setShowPopup] = useState(false);
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
                                    return <MainCard key={item.id} onClick={() => {setShowPopup(!showPopup)}}>
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
                                    </MainCard>
                                })
                            }
                        </div>
                        <NumbersBtn />
                    </div>
                </div>
            </Container>
        </section>
        <Popup showPopup={showPopup} onClick={() => {setShowPopup(false)}}>
            <p>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Qui Magni
                Delectus Tenetur Autem, Sint Veritatis!
            </p>
            <div className="popup-content-img">
                <img src={popupicon} alt="popupicon" />
            </div>
            <div className="popup-btn d-flex">
                <BtnPrimary path='/register' title='sing up' />
                <BtnSecondary path='/login' title='login' />
            </div>
        </Popup>
        </>
    )
}

export default Food;