import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackgroundRegister from "./Background/BackgroundRegister";
import ImageSlider from "./Background/ImageSlider";
import Register from "./Register/Register";
import RegisterMain from "./Register/RegisterMain";
import LoginMain from "./Login/LoginMain";
import TypeSelection from "./Register/TypeSelection";
import UserBackground from "./UserBackground/User/Userbackground";



function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<UserBackground />} />
    </Routes>
    </Router>
  );
}

export default App;
