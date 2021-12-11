import Navbar from "./components/navbar";
import "./App.css";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
