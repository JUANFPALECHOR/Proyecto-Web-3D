
import './Modal.css';

const Modal = ({ show, onClose, title, message }) => {

  if (!show) {
    return null;
  }
  return (
    <div className="modal-overlay" onClick={onClose}> 
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1 className='title-modal'>{title}</h1>
       
        <p dangerouslySetInnerHTML={{ __html: message }}></p>
        <div>
        <button className="modal-close-button" onClick={onClose}>X</button>
        </div>
        <div>
        <button className="modal-accept-button" onClick={onClose}>Aceptar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;