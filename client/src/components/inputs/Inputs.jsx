import './Inputs.css';

export const FieldInput = (props) => {
  return (
    <p className='checkout-box'>
      <label htmlFor='last-name' className='checkout-subtitle'>
          {props.title}&nbsp;
          <abbr className="checkout-required" title="required">*</abbr>
      </label>
      <span className='checkout-info'>
          {props.children}
      </span>
    </p>
  )
}
export const FieldForm = (props) => {
  return (
    <p className='field'>
      <label htmlFor={props.htmlFor} className='field-subtitle'>
          {props.title}&nbsp;
          <abbr className="field-required" title="required">*</abbr>
      </label>
      <span className='field-type'>
          {props.children}
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
