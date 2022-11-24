import {Link, NavLink} from 'react-router-dom';
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