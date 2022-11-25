import './GalleryCard.css';

const GalleryCard = (props) => {
    return (
        <div className='gallery-card border-thick'>
            {props.children}
        </div>
    )
}

export default GalleryCard;