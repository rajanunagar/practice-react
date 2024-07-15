import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Example from "./model";
import { FormikYupForm } from "./formikYupForm";
import Child from "./Child";
function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fetching, setFetching] = useState(false);
  const getUser = async () => {
    try {
      setFetching(true);
      const usersRes = await axios.get("http://localhost:5001/api/users");
      setSuccess(true);
      console.log(usersRes);
      setUsers(usersRes.data);
    } catch (err) {
      setError(true);
    }
    setFetching(false);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="App mt-5">
     <Child  getUser={getUser}/>
    <div className="container">
    <div className='row'>
      <FormikYupForm/>
    </div>
    <div className="row">
      <div className="col">
      <Example _id="" addOrEdit="Add" />
      </div>
      <div className="col">
      <h2>User List</h2>
      </div>
      <div className="col">
      </div>
    </div>
    </div>
      {error && <p>Error</p>}
      {fetching && <p>Fetching</p>}
      {success && users.length > 0 && (
        <div className="container">
          <div className="row justify-content-md-center">
          <div className="col-9">
            <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>username</th>
                  <th>email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Example _id={user._id} addOrEdit="Edit" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default App;
