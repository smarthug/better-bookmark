import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // offline 작동하게 만들기 ..
    // 대충 가는 코드
    // window.open("https://docs.google.com/spreadsheets/d/1Xk7d0O3o6inZ4JbAbQuwviIUJNSAfwfRCusjoiIGt6w/edit#gid=566299657")
    // window.location.replace("https://docs.google.com/spreadsheets/d/1Xk7d0O3o6inZ4JbAbQuwviIUJNSAfwfRCusjoiIGt6w/edit#gid=566299657")
    // window.location.replace("https://docs.google.com/spreadsheets/d/1Xk7d0O3o6inZ4JbAbQuwviIUJNSAfwfRCusjoiIGt6w/edit?usp=sharing")
    document.getElementById("what").click();
  }, []);

  function test() {
    document.getElementById("thelink").click();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button id="what" onClick={test}>TEST</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          id="thelink"
          className="App-link"
          href="https://docs.google.com/spreadsheets/d/1Xk7d0O3o6inZ4JbAbQuwviIUJNSAfwfRCusjoiIGt6w/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to spreadsheets
        </a>
      </header>
    </div>
  );
}

export default App;
