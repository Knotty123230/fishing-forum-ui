import React from "react";
import "./Modal.css";

interface Props {
    imageUrl: string;
    onClose: () => void;
}

const Modal: React.FC<Props> = ({ imageUrl, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal">
                <button className="modal-close" onClick={onClose}>✕</button>
                <img src={imageUrl} alt="Post" className="modal-image"/>
            </div>
        </div>
    );
};

export default Modal;
