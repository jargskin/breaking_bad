import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Table from '../Table';
import './modal.scss';

const GenericModal = (item) => {
  const { name, birthday, img, nickname, portrayed, status } = item.data;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const DataForTable = {
    nombre: name,
    nacimiento: birthday,
    imagen: img,
    apodo: nickname,
    actor: portrayed,
    estado: status
  }


  return (
    <>
      <button className='btn btn-secondary mt-1 more-details' onClick={handleOpen}>More</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        animationType="slide"
      >
        <div className="generic-modal">
          <h2 id="modal-modal-title">{name}</h2>
          <div id="modal-modal-description">
            <Table data={DataForTable} />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default GenericModal;
