import './Button.css';
import { NavLink, Link } from "react-router-dom";

const ButtonCard = (props) => {
    return (
        <Link className='btn-card' exact="true" to={props.path}>
            {props.children}
        </Link>
    )
}
const ButtonCardSelect = (props) => {
    return (
        <NavLink className='border-light' exact="true" to={props.path}>
            {props.children}
        </NavLink>
    )
}

export default ButtonCard
export {ButtonCardSelect}