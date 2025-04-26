
import './App.css';
import Dictionary from './Component/Dictionary';
export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
      <main>
        <Dictionary defaultkeyword="rain"/>
      </main>
      <footer className="app-footer"><small>Coded by Maryam Ahmed and is <a href="https://github.com/ZaamiAhmed/dictionary-app" target="_blank" rel="noreferrer">open-sourced</a></small></footer>
      </div>
    </div>
  );
}


