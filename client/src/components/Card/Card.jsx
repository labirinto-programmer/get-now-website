import './Card.css';

const CardFood = (props) => {
    return (
        <div className='food-card'>
            {props.children}
        </div>
    )
}

export default CardFood;