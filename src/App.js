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
import Cart from './pages/ishop/components/Cart';
import Facts from './pages/facts'
import Filter from './pages/filter'
import Rainbow from './pages/rainbowFrame';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route index path="react-learning-itacademy" element={<Home />} />
        <Route path="squares" element={<Squares />} />
        <Route path="todo" element={<Todo />} />
        <Route path="ishop" element={<Ishop />} />
        <Route path='cart' element={<Cart />}/>
        <Route path="facts" element={<Facts />} />
        <Route path="filter" element={<Filter />} />
        <Route path="rainbowFrame" element={<Rainbow />} />
      </Routes>
    </Router>
  )
}

export default App;