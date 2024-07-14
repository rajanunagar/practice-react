import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Example from "./model";
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
    <div class="container">
    <div class="row">
      <div class="col">
      <Example _id="" addOrEdit="Add" />
      </div>
      <div class="col">
      <h2>User List</h2>
      </div>
      <div class="col">
      </div>
    </div>
    </div>
      {error && <p>Error</p>}
      {fetching && <p>Fetching</p>}
      {success && users.length > 0 && (
        <div class="container">
          <div class="row justify-content-md-center">
          <div class="col-9">
            <div class="table-responsive">
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
