import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import './modal.scss';

const CharacterModal = (item) => {
  const { name, birthday, img, nickname, portrayed, status, occupation, category } = item.data;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button className='btn btn-secondary mt-1 more-details' onClick={handleOpen}>More</button>
      <Modal
        open={open}
        onClose={handleClose}
        animationType="slide"
      >
        <div className="generic-modal">
          <h2 className='generic-modal__title'>{name}</h2>
          <div className='generic-modal__content'>
            <div>
              <img src={img} alt={name} />
            </div>
            <div>
              <p> <span>Actor</span>: {portrayed} </p>
              <p> <span>Nickname</span>: {nickname} </p>
              <p> <span>Birthdate</span>: {birthday} </p>
              <p> <span>Status</span>: {status} </p>
              <p> <span>Occupation</span>: {occupation[0]} </p>
              <p> <span>Serie</span>: {category} </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CharacterModal;
