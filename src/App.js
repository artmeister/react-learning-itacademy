import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
// import cls from './App.module.scss';
import Home from './components/Home'
import Squares from './components/Squares'
import Todo from './components/Todo'
import Ishop from './components/Ishop'
import Ishop2 from './components/Ishop2'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/react-learning-itacademy">Home</Link>
            </li>
            <li>
              <Link to="/squares">Squares</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/ishop">Ishop</Link>
            </li>
            <li>
              <Link to="/ishop2">Ishop2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/react-learning-itacademy" element={<Home/>} />
          <Route exact path="/squares" element={<Squares/>} />
          <Route exact path="/todo" element={<Todo/>} />
          <Route exact path="/ishop" element={<Ishop/>} />
          <Route exact path="/ishop2" element={<Ishop2/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;