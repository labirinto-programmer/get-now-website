import { Link } from "react-router-dom";
import './Button.css';

export const BtnPrimary = (props) => {
    return (
        <Link className='btn btn-primary' to={props.path}>{props.title}</Link>
    )
}
export const BtnSecondary = (props) => {
    return (
        <Link className='btn btn-secondary' to={props.path}>{props.title}</Link>
    )
}
export const BtnForm = (props) => {
    return (
        <input type="submit" value={props.title} className='btn btn-primary form-btn' />
    )
}
export const BtnError = (props) => {
    return (
        <Link className='btn btn-error' to={props.path}>{props.title}</Link>
    )
}
export const BtnFormTable = (props) => {
    return (
        <input type="submit" value={props.title} className='btn btn-primary' />
    )
}