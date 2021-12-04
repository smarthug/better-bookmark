import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    
    // offline 작동하게 만들기 ..


    // 대충 가는 코드
    // window.open("https://docs.google.com/spreadsheets/d/1Xk7d0O3o6inZ4JbAbQuwviIUJNSAfwfRCusjoiIGt6w/edit#gid=566299657")
    window.location.replace("https://docs.google.com/spreadsheets/d/1Xk7d0O3o6inZ4JbAbQuwviIUJNSAfwfRCusjoiIGt6w/edit#gid=566299657")
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
