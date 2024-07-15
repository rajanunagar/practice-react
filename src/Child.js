import React, { useState } from "react";
import axios from "axios";
function Child({ getUser }) {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fetching, setFetching] = useState(false);
  const colors=['red','greedn','blue','purple'];
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      setFetching(true);
      const usersRes = await axios.post("http://localhost:5001/api/users/register",user);
      //const usersRes = await axios.put("http://localhost:5001/api/users/6690b139ac460960afbb0034",user);
      setSuccess(true);
      getUser();
      console.log('success');
    } catch (err) {
      setError(true);
      console.log(err.response.data);
    }
    setFetching(false);
  };
  const handlechange = (event) => {
    setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
    console.log(user);
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
        {/* <select onChange={handlechange} name='color'> */}
        <select name='color'>
          {

            colors.map((color)=> (
               <option value={color} key={color}>{color}</option>
            )
            )
          }
        </select>
        <input type="submit" />
      </form>
    </>
  );
}

export default Child;
