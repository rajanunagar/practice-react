import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import React from 'react'
function Example({ _id, addOrEdit }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fetching, setFetching] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      setFetching(true);
      const usersRes = await axios.post(
        "http://localhost:5001/api/users/register",
        user
      );
      //const usersRes = await axios.put("http://localhost:5001/api/users/6690b139ac460960afbb0034",user);
      setSuccess(true);
      console.log("success");
      handleClose();
    } catch (err) {
      setError(true);
      console.log(err.response.data.title);
    }
    setFetching(false);
  };
  const handlechange = (event) => {
    setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {addOrEdit}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{_id}</p>
          <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
               <label htmlFor="username" className="form-label">
                username
              </label>
              <input
                className="form-label"
                type="text"
                name="username"
                onChange={handlechange}
                id="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
                className="form-label"
                type="email"
                name="email"
                onChange={handlechange}
                id="email"
              />
            </div>{" "}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                password1
              </label>
              <input
                className="form-label"
                type="password"
                name="password"
                onChange={handlechange}
                id="password"
              />
            </div>
            <input type="submit" />
          </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
