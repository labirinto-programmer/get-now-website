import './FormInput.css';

const FormInput = (props) => {
  return (
    <div className="form__group ">
        <input
        className='form-input'
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
        />
  </div>
  )
}

export default FormInput