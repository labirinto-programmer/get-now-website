import React, {useState} from 'react';
import {Container, MainCard, BtnPrimary, NumbersBtn, Results, SearchDropdown} from '../../components/index';
import {getImg} from '../../utils/Helper';
import {selectInfo} from "../../data/dataInfo.jsx";
import searchicon from '../../assets/image/search-icon.png';
import data from "../../data/food.json";
import './SearchPage.css';

const Search = () => {
    const [info, setInfo] = useState(data);
    const [num, setNum] = useState(16);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [select, setSelected] = useState('choose one');

    const favEle = (e) => {
        if (e.target.textContent === "latest") {
            const chooseInfo = data.sort((item1, item2) => {
                return new Date(item1.releaseDate) > new Date(item2.releaseDate) ? -1 : 1;
            });
            setInfo(chooseInfo);
        } else if (e.target.textContent === "popularity") {
            const chooseInfo = data.sort((item1, item2) => {
                return item1.popularity > item2.popularity ? -1 : 1;
            });
            setInfo(chooseInfo);
        } else {
            const chooseInfo = data.filter((item) => {
                return item.voteAverage > 5;
            });
            setInfo(chooseInfo);
        }
		setSelected(e.target.textContent);
    }
    const search = (event) => {
		const matchedInfo = data.filter((item) => {
            return item.foodName
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
		});

		setInfo(matchedInfo);
		setSearchPhrase(event.target.value);
	};
    return (
        <section className='search section'>
            <Container>
                <div className='search-content'>
                    <div className='search-box d-flex'>
                        <input onChange={search} value={searchPhrase} onKeyUp={(e) => setNum(e.target.parentNode.parentNode.querySelector('.search-result').querySelector('.search-menu').querySelectorAll('.main-card').length)} className='border-light' type='search' placeholder='choose your favorites food' />
                        <div className='search-img'>
                            <img src={searchicon} alt='search-icon' />
                        </div>
                    </div>
                    <div className='search-info d-flex'>
                        {
                            info.length !== 0
                            ? <span>
                                showing 1-{num} of {data.length} resultes
                            </span>
                            : <span>
                                showing 1-{0} of {data.length} resultes
                            </span>
                        }
                        <SearchDropdown 
                        setSelected={setSelected} 
                        selected={select} 
                        data={selectInfo}
                        onClick={favEle}
                        />
                    </div>
                    <div className='search-result'>
                        {
                            info.length === 0 
                            ? <Results text={`Sorry we could not find any result with "${searchPhrase}" try another keyword`} />
                            : 
                            <div className='search-menu d-grid'>
                                {
                                    info.slice(0, 16).map((item) => {
                                        return <MainCard key={item.id}>
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
                                                <BtnPrimary path='/cart' title='add to cart' />
                                            </div>
                                        </MainCard>
                                    })
                                }
                            </div>
                        }
                    </div>
                    <NumbersBtn />
                </div>
            </Container>
        </section>
    )
}

export default Search;