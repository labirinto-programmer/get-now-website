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

export const SearchDropdown = (props) => {
    const [isActive, setActive] = useState(false);
    const options = props.data;
    return (
        <span className='search-dropdown'>
            <span className='search-dropdown-btn d-flex' onClick={(e) => setActive(!isActive)}><strong>{props.selected}</strong><img className='search-icon-dropdown' src={IconArrow} alt="Icon of Arrow"/></span>
                {isActive && <span className='search-dropdown-content'>
                {options.map((item) => {
                    return (
                        item.op.map((ele, index) => {
                            return (
                                <span key={index} className='search-dropdown-item' onClick={(e) => {
                                    props.setSelected(ele) 
                                    setActive(false)
                                    props.onClick(e)
                                    }}>
                                    {ele}
                                </span>
                            )
                        })
                    )
                })}
            </span>}
        </span>
    )
}
export const NumsDropdown = (props) => {
    const [isActive, setActive] = useState(false);
    const options = props.data;
    return (
        <span className='nums-dropdown'>
        <span className='numsdropdown-btn' onClick={(e) => setActive(!isActive)}><strong>{props.selected}</strong><img className='numsdropdown-icon' src={IconArrow} alt="Icon of Arrow"/></span>
            {isActive && <span className='numsdropdown-content'>
            {options.map((option, index) => (
                <span key={index} className='numsdropdown-item' onClick={ (e) => {
                    props.setSelected(option) 
                    setActive(false)
                    }}>
                    {option}
                </span>
            ))}
            </span>}
        </span>
    )

}
