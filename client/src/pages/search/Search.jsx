import React, {useState} from 'react';
import {Container, Card, BtnPrimary, NumbersBtn} from '../../components/index';
import {getImg} from '../../utils/Helper';
import {selectInfo} from "../../data/dataInfo.jsx";
import searchicon from '../../assets/image/search-icon.png';
import data from "../../data/food.json";
import './Search.css';

const Search = () => {
    const [search, setSearch] = useState('');
    const [num, setNum] = useState(16);
    return (
        <section className='search section'>
            <Container>
                <div className='search-content'>
                    <div className='search-box d-flex'>
                        <input onChange={(e) => setSearch(e.target.value)} onKeyUp={(e) => setNum(e.target.parentNode.parentNode.querySelector('.search-menu').querySelectorAll('.food-card').length)} className='border-light' type='search' placeholder='choose your favorites food' />
                        <div className='search-img'>
                            <img src={searchicon} alt='search-icon' />
                        </div>
                    </div>
                    <div className='search-info d-flex'>
                        <span>
                            showing 1-{num} of {data.length} resultes
                        </span>
                        <div className='search-select'>
                            <select className='border-light'>
                                {
                                    selectInfo.map((item) => {
                                        return (
                                            item.op.map((ele, index) => {
                                                return (
                                                    <option value={ele} key={index}>{ele}</option>
                                                )
                                            })
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className='search-menu d-grid'>
                        {
                            data.filter((item) => {
                                return search.toLowerCase() === ''
                                ? item
                                : item.foodName.toLowerCase().includes(search);
                            }).slice(0, 16).map((item) => {
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
                                        <BtnPrimary path={item.id} title='add to cart' />
                                    </div>
                                </Card>
                            })
                        }
                    </div>
                    <NumbersBtn />
                </div>
            </Container>
        </section>
    )
}

export default Search;