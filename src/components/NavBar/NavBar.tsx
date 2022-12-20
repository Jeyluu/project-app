import { memo } from 'react'

function NavBar() {
  return (
    <nav>
      <ul>
        <a href="/">
          <li>Project List</li>
        </a>
      </ul>
    </nav>
  )
}

export default memo(NavBar)
