import orangeicon from "../../assets/image/orange-close-icon.png";
import "./Popup.css";

const Popup = (props) => {
    return (
        <div className={`popup-box ${props.showPopup ? '' : 'active'}`}>
            <div className="popup-container">
                <div className="popup-container-img" onClick={props.onClick}>
                    <img src={orangeicon} alt="orangeicon" />
                </div>
                <div className="popup-content">
                    {/* {props.text} */}
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Popup;
