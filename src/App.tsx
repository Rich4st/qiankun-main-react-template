import { Link, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Sub from './views/Sub';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/sub">Sub</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sub" element={<Sub />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
