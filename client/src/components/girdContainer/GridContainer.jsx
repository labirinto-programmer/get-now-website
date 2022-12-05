import './GridContainer.css';

const GridContainer = (props) => {
  return (
    <div className={`${props.className} grid-container d-grid`}>
       {props.children}
    </div>
  )
}

export default GridContainer