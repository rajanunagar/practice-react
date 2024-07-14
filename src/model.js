import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function Example({_id,addOrEdit}) {
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
      const usersRes = await axios.post("http://localhost:5001/api/users/register",user);
      //const usersRes = await axios.put("http://localhost:5001/api/users/6690b139ac460960afbb0034",user);
      setSuccess(true);
      console.log('success');
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
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handlechange}
          placeholder="username"
        />
        <input
          type="email"
          name="email"
          onChange={handlechange}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          onChange={handlechange}
          placeholder="password"
        />
        <input type="submit" />
      </form>
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