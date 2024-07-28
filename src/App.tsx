import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu, DriftPage, ForzaPage, HomePage, TimeAttackPage } from './components/TaskOne/Menu';
import CRUD from './components/TaskTwo/CRUD/CRUD';


function App() {
  return (
      <Router>
        <h1>Задача 1!</h1>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
        <h1>Задача 2!</h1>
          <Routes>
            <Route path="/*" element={<CRUD />} />
          </Routes>
      </Router>
  )
}

export default App;
