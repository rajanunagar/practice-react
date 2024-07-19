import "./App.css";
import Table from "./Table";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Header from "./Header";
import HtmlValidation from "./HtmlValidation";
import FileUpload from "./FileUpload";
import BootstrapForm from "./BootstrapForm";
import Login from "./Login";
import Logout from "./Logout";
import Error from "./Error";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home/>} />
          <Route path="table" element={<Table />} />
          <Route path="about" element={<About />} />
          <Route path="htmlform" element={<HtmlValidation />} />
          <Route path="bootstrapform" element={<BootstrapForm />} />
          <Route path="logout" element={<Logout/>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error/>} />

      </Routes>
      {/* <FileUpload/> */}
    </div>
  );
}

export default App;
