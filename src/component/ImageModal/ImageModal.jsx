// components/ImageModal/ImageModal.jsx
import Modal from 'react-modal';
import { useEffect } from 'react';

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)', 
      zIndex: 1000,
    },
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      borderRadius: '12px',
      width: '500px',      
      height: '700px',     
      overflow: 'hidden',  
      backgroundColor: '#1e1e1e', 
      color: '#fff', 
    },
  };

export const ImageModal = ({ isOpen, onClose, src, alt, location }) => {
    useEffect(() => { 
  }, []);

  return (
    <Modal
  isOpen={isOpen}
  onRequestClose={onClose}
  style={customStyles}
  contentLabel="Image Modal"
  ariaHideApp={false} 
>
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: 'transparent',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
        }}
      >
        &times;
      </button>
      <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '20px',
  }}
>
  <img
    src={src}
    alt={alt}
    style={{
      width: '100%',
      height: 'auto',
      maxHeight: 'calc(100% - 40px)',
      borderRadius: '8px',
      objectFit: 'contain',
    }}
              />
   <p><strong>Location:</strong>{location}</p>           
</div>
          


    </Modal>
  );
};
