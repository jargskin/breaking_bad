import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const VideoModal = ({url}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id={`tooltip-top`}>
            View Trailer
          </Tooltip>
        }
      >
        <button 
          className='btn btn-outline-secondary view-trailer'
          onClick={handleOpen}
        >
          <i className="fab fa-youtube" />
        </button>
      </OverlayTrigger>

      <Modal
        open={open}
        onClose={handleClose}
        animationType="slide"
      >
        <div className="generic-modal">
          <div id="modal-modal-description">
            <iframe width="300" height="315" src="https://www.youtube.com/embed/XZ8daibM3AE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </Modal>
    </>
  )
}
export default VideoModal;
