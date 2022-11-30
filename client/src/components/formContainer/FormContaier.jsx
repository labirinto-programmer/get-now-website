import './FormContaier.css'

const FormContaier = (props) => {
  return (
    <div className='login-singup-container'>
        <div className='form-container border-thick'>
            {props.children}
        </div>
    </div>
  )
}

export default FormContaier;