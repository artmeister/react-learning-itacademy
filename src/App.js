import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.scss';

import Navbar from './components/Navbar';

import Home from './pages/home'
import Squares from './pages/squares'
import Todo from './pages/todo'
import Ishop from './pages/ishop'
import Facts from './pages/facts'
import Filter from './pages/filter'
import Rainbow from './pages/rainbowFrame';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/react-learning-itacademy" element={<Home />} />
        <Route exact path="/squares" element={<Squares />} />
        <Route exact path="/todo" element={<Todo />} />
        <Route exact path="/ishop" element={<Ishop />} />
        <Route exact path="/facts" element={<Facts />} />
        <Route exact path="/filter" element={<Filter />} />
        <Route exact path="/rainbowFrame" element={<Rainbow />} />
      </Routes>
    </Router>
  )
}

export default App;