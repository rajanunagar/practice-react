import React, { useState } from "react";
import axios from "axios";
function Child({ setName }) {
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
    </>
  );
}

export default Child;
