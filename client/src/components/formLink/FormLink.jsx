import {Link} from 'react-router-dom';
import './FormLink.css';

const FormLink = (props) => {
  return (
    <span>
        {props.text}<Link className="signup-link" to={props.to}> {props.title}</Link>
    </span>
  )
}

export default FormLink