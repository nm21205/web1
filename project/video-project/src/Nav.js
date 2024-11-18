import { FaEnvelope, FaSearch } from 'react-icons/fa';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <a href="#">
          <FaEnvelope size="1.5em" />
        </a>
      </li>
      <li>
        <a href="#">
          <FaSearch size="1.5em" />
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;