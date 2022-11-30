import './MainHeadForm.css';

const MainHeadForm = (props) => {
  return (
    <div className='head-form-data'>
        <h2 className='head-form-title'>{props.title}</h2>
        <p className='head-form-description'>{props.description}</p>
    </div>
  )
}

export default MainHeadForm