import {useState} from 'react';
import whiteheart from '../../assets/image/white-heart.png';
import redheart from '../../assets/image/red-heart.png';
import './Card.css';

const CardFood = (props) => {
    const [showMenu, setShowMenu] = useState(true);
    return (
        <div className='main-card'>
            <div className='orange-box'>
                <div className='main-heart' onClick={() => setShowMenu(!showMenu)}>
                    {
                        showMenu 
                        ? <img className='white-heart' src={whiteheart} alt='whiteheart' /> 
                        : <img className='red-heart' src={redheart} alt='redheart' />
                    }
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default CardFood;