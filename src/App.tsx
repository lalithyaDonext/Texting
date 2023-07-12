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


function App() {
  return (
  <Router>
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<UserBackground />} />
=======
      {/* <Route path="/" element={<UserBackground />} /> */}
      <Route path="/" element={<UserBackground />} />

>>>>>>> 397a602b09a902f44fc2d821e53b4f53e86dc84f
    </Routes>
    </Router>
  );
}

export default App;
