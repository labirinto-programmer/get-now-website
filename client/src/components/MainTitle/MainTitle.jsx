import './MainTitle.css';

const MainTitle = (props) => {
    return (
        <div className='main-title'>
            <h2>
                {props.children}
            </h2>
        </div>
    )
}

export default MainTitle