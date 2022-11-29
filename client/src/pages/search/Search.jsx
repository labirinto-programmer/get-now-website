import {Container, Card, BtnPrimary, NumbersBtn} from '../../components/index';
import {getImg} from '../../utils/Helper';
import {selectInfo} from "../../data/dataInfo.jsx";
import searchicon from '../../assets/image/search-icon.png';
import data from "../../data/food.json";
import './Search.css';

const Search = () => {
    return (
        <section className='search section'>
            <Container>
            <div className='search-content'>
                <div className='search-box d-flex'>
                    <input className='border-light' type='search' placeholder='choose your favorites food' />
                    <div className='search-img'>
                        <img src={searchicon} alt='search-icon' />
                    </div>
                </div>
                <div className='search-info d-flex'>
                    <span>
                        showing 1-16 of {data.length} resultes
                    </span>
                    <select>
                        {
                            selectInfo.map((item) => {
                                return (
                                    item.op.map((ele, index) => {
                                        return (
                                            <option key={index}>{ele}</option>
                                        )
                                    })
                                )
                            })
                        }
                    </select>
                </div>
                <div className='search-menu d-grid'>
                    {
                        data.slice(0, 16).map((item) => {
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
                <NumbersBtn />
            </div>
            </Container>
        </section>
    )
}

export default Search;