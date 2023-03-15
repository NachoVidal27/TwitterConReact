import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Tweets from "./pages/TweetsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tweets" element={<Tweets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
