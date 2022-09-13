import Header from "components/Header";

import "./App.css";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <header className="App-header">
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
