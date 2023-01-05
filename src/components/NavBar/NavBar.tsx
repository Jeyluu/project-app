import { memo } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <ul id="navbar-container">
        <Link to="/">
          <li>Project List</li>
        </Link>
        <Link to="/create-new-project">
          <li>Create a project</li>
        </Link>
      </ul>
    </nav>
  )
}

export default memo(NavBar)
