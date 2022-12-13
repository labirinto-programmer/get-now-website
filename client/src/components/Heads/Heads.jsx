import './Heads.css';

export const MainHeading = (props) => {
  return (
      <div className='main-heading'>
          <div className='heading-title'>
              <h2>
                  {props.title}
              </h2>
          </div>
          <p className='heading-description'>
              {props.text}
          </p>
      </div>
  )
}
export const MainHeadForm = (props) => {
  return (
    <div className='head-form-data'>
        <h2 className='head-form-title'>{props.title}</h2>
        <p className='head-form-description'>{props.description}&nbsp;
          <abbr className="field-required" title="required">*</abbr></p>
    </div>
  )
}
