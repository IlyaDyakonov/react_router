import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import { NavigationMenu } from './components/TaskOne/';
import CRUD from './components/TaskTwo/CRUD/CRUD';


function App() {
  return (
      <Router>
        <h1>Домашнее задание «React Router»</h1>
        <header className='header'>
          <nav className="nav-components">
            <NavLink to={"/taskone/"} className="nav-link">Задача 1!</NavLink>
            <NavLink to={"/tasktwo/"} className="nav-link">Задача 2!</NavLink>
          </nav>
        </header>

          <Routes>
            {/* задача 1! */}
            <Route path="/taskone/*" element={<NavigationMenu />} />

            {/* задача 2! */}
            <Route path="/tasktwo/*" element={<CRUD />} />
          </Routes>
      </Router>
  )
}

export default App;
