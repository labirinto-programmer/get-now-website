import './Inputs.css';

export const FormInput = (props) => {
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
export const FieldInput = (props) => {
  return (
    <p className='checkout-box'>
      <label htmlFor='last-name' className='checkout-subtitle'>
          {props.title}&nbsp;
          <abbr className="checkout-required" title="required">*</abbr>
      </label>
      <span className='checkout-info'>
          <input type={props.type} className='checkout-input'/>
      </span>
    </p>
  )
}
export const SelectedInput = (props) => {
  return (
    <p className='checkout-box'>
    <label htmlFor='country-name' className='checkout-subtitle'>
        {props.title}&nbsp;
        <abbr className="checkout-required" title="required">*</abbr>
    </label>
    <span className='checkout-info'>
      {props.children}
    </span>
    </p>
  )
}
