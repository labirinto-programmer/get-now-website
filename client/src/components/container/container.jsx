import './Container.css';

export const Container = (props) => {
  return (
    <div className='container'>
      {props.children}
    </div>
  )
}
export const FormContaier = (props) => {
  return (
      <div className='form-container border-thick'>
        {props.children}
      </div>
  )
}
export const BtnContaier = (props) => {
  return (
      <div className='btn-container d-flex'>
        {props.children}
      </div>
  )
}
export const WidthContainer = (props) => {
  return (
      <div className='Width-container section-container'>
        {props.children}
      </div>
  )
}

export const GridContainer = (props) => {
  return (
    <div className={`${props.className} grid-container d-grid`}>
      {props.children}
    </div>
  )
}