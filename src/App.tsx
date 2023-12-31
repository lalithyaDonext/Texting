import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackgroundRegister from "./Background/BackgroundRegister";
import ImageSlider from "./Background/ImageSlider";
import Register from "./Register/Register";
import RegisterMain from "./Register/RegisterMain";
// import LoginMain from "./Login/LoginMain";
import TypeSelection from "./Register/TypeSelection";
import UserBackground from "./UserBackground/User/Userbackground";
import RegiterViewBackground from "./RegiterBackground/RegiterViewBackground";
// import RegisterBackground from "./RegisterDesigns/RegisterBackground/RegisterBackground";
import Auth from "./auth/Auth";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
    </Router>
  );
}

export default App;
