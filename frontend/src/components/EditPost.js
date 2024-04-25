import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import config from "./config";


export default function AddPost({post}) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    body: ''

  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  useEffect(() => {
    setFormData({
      title: post.title,
      body: post.body

    });
  }, [])


  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);




  const handleSaveChanges = async () => {
    try {
      // Make an Axios POST request to send the formData to the backend
      const response = await axios.put(`${config.UPDATE_POST}/${post._id}`, formData);
      // Handle the response from the backend (e.g., show a success message)
      console.log('Data sent to the backend successfully:', response.data);
      handleClose(); // Close the modal after saving
    } catch (error) {
      // Handle any errors (e.g., show an error message)
      console.error('Error sending data to the backend:', error);
    }
  };


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        edit
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>you can create your  post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter post title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter here"
                autoFocus
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter post body</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="body"
                value={formData.body}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

