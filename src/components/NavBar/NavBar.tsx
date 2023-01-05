import { memo } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Project List</li>
        </Link>
        <Link to="/create-new-project">
          <li>Create A project</li>
        </Link>
      </ul>
    </nav>
  )
}

export default memo(NavBar)
