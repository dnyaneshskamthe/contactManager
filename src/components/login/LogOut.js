import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const LogOut = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    setIsLoggedOut(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className='m-4'>
      <div>
        <button className='btn btn-sm btn-danger' onClick={handleShowModal}>
          Logout
        </button>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant='danger' onClick={handleLogOut}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>

      {isLoggedOut && <Navigate to='/login' />}
    </div>
  );
};

export default LogOut;
