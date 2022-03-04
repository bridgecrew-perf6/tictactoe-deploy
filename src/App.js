import "./App.css";
import logo from "./img/logo/logo.png";
import { Game } from "./Tictactoe";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <Game></Game>
      <Footer></Footer>
    </div>
  );
}

export default App;
