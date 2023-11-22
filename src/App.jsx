import logo from './logo.svg';
import './App.css';
import './firebase.js';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="navbar">
          <div className="icon">
            <h2 className="logo">Svetaine</h2>
          </div>

          <div className="menu">
            <ul>
              <li><a href="App.jsx"> PAGRINDINIS  </a></li>
              <li><a href="antras.jsx"> APIE MUS  </a></li>
              <li><a href="#"> PASLAUGOS  </a></li>
              <li><a href="#"> KONTAKTAI  </a></li>
            </ul>
          </div>
          <div className="search">
            <input className="srch" type="search" name="" placeholder="paieska"></input>
            <a href="#"> <button className="btn">ieskoti</button> </a>
          </div>
        <body>
          <div className="form">
            <h2>Registruokis</h2>
            <input type="email" name="email" placeholder="Elektroninis pastas"></input>
            <input type="password" name="" placeholder="Slaptazodis"></input>
            <button className="btn"><a href="#">Login</a></button>

            <p className="link">Neturite profilio?</p>
            <a hreaf="#">Prisijunk cia</a>
            <p className="liw">Prisiregistruok</p>
          </div>
          </body>
        </div>
      </div>
    </div>
  );
}
export default App;


