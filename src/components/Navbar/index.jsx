import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
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
          <Link to="/facts">Facts</Link>
        </li>
        <li>
          <Link to="/filter">Filter</Link>
        </li>
        <li>
          <Link to="/rainbowFrame">RainbowFrame</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;