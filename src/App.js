import "./App.css";
import Table from "./Table";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Header from "./Header";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home/>} />
          <Route path="table" element={<Table />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
