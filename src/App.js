import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Aurora Living LLP" />
        <p>
          <a
            href="mailto:contact@auroraliving.in"
            className="App-link"
            rel="noopener noreferrer"
          >
            contact@auroraliving.in
          </a>{" "}
          &bull;{" "}
          <a
            href="tel:+916360058954"
            className="App-link"
            rel="noopener noreferrer"
          >
            +91 6360058954
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
