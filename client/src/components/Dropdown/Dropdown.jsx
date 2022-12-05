import {useState} from 'react';
import IconArrow from '../../assets/image/list-arrow.png';
import './Dropdown.css';

export const Dropdown = (props) => {
    const [isActive, setActive] = useState(false);
    const options = props.data;
    return (
    <span className='dropdown'>
        <span className='dropdown-btn d-flex' onClick={(e) => setActive(!isActive)}><strong>{props.selected}</strong><img className='icon-dropdown' src={IconArrow} alt="Icon of Arrow"/></span>
            {isActive && <span className='dropdown-content'>
            {options.map((option, index) => (
                <span key={index} className='dropdown-item' onClick={ (e) => {
                    props.setSelected(option.country) 
                    setActive(false)
                    }}>
                    {option.country}
                </span>
            ))}
        </span>}
    </span>
  )
}

export default Dropdown;