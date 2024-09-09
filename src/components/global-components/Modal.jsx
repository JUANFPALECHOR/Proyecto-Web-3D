import PropTypes from 'prop-types';
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
        </div>
        <div>
        <button className="modal-accept-button" onClick={onClose}>Aceptar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;


// Definir los tipos de las props
Modal.propTypes = {
  show: PropTypes.bool.isRequired,     // show debe ser un booleano y es requerido
  onClose: PropTypes.func.isRequired,  // onClose debe ser una función y es requerido
  title: PropTypes.string.isRequired,  // title debe ser un string y es requerido
  message: PropTypes.string.isRequired // message debe ser un string y es requerido
};