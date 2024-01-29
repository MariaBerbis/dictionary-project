import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid mt-0" alt="logo" />
          <h1>LEXIPIC DICTIONARY</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This app was built by Maria Berbis and is open-sourced on GitHub.
          </small>
        </footer>
      </div>
    </div>
  );
}
