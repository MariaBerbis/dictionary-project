import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid mt-0" alt="logo" />
          <h1>LEXIPIC</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This app was built by{" "}
            <a
              href="https://portfolio-mariaberbis.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maria Berbis
            </a>
            , is open-sourced on{" "}
            <a
              href="https://github.com/MariaBerbis"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://app.netlify.com/teams/mariaberbis/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
