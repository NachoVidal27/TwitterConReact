import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
