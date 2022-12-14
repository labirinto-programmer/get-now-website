import {BtnSecondary} from '../index';
import arrowleft from '../../assets/image/arrow-left.png';
import arrowright from '../../assets/image/arrow-right.png';
import {nums} from "../../data/dataInfo.jsx";
import './NumbersBtn.css';

const NumbersBtn = () => {
    return (
        <>
            <div className='numbers-btns d-flex'>
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
        </>
    )
}

export default NumbersBtn;