import {useState} from 'react';
import {Container, GridContainer, NumsDropdown, BtnPrimary} from '../../components/index';
import PlusIcon from '../../assets/image/plus-icon.png';
import MinusIcon from '../../assets/image/minus-icon.png';
import Img from '../../assets/image/image89.png';
import './Details.css';

const Details = () => {
  const [selected, setSelected] = useState("01");
  const datas = [1,2,3,4];
  return (
    <section className='details section'>
      <Container>
        <GridContainer className="section-container">
          <div className='details-bg'>
              <img className='details-img' src={Img} alt='img of details'/>
          </div>
          <div className='details-data'>
            <h2 className='details-title'>Hello Women In Here</h2>
            <div className='details-price'>45$</div>
            <p className='details-description'>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Labore Iste Minima, Deserunt, Ipsam Tempore Amet Unde Repellendus Veritatis Architecto Ipsum, Similique Perferendis Illo Totam Magnam Commodi Fuga Illum Expedita!
            </p>
            <div className="details-nums d-flex">
                <img className="details-icon" src={PlusIcon} alt=""/>
                <NumsDropdown selected={selected} setSelected={setSelected} data={datas}/>
                <img className="details-icon" src={MinusIcon} alt=""/>
            </div>
            <BtnPrimary title="Add to cart"/>
          </div>
        </GridContainer>
      </Container>
    </section>
  )
}

export default Details