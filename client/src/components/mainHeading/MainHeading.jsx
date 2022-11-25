import './MainHeading.css';

const MainHeading = (props) => {
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

export default MainHeading;