import { Link } from "react-router-dom";
import './Button.css';

export const BtnPrimary = (props) => {
    return (
        <Link className='btn btn-primary'>{props.title}</Link>
    )
}
export const BtnSecondary = (props) => {
    return (
        <Link className='btn btn-secondary'>{props.title}</Link>
    )
}
export const BtnForm = (props) => {
    return (
        <input type="submit" value={props.title} className='btn btn-primary form-btn' />
    )
}