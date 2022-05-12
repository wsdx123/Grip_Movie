import { NavLink } from 'react-router-dom'
import { cx } from 'styles'

import styles from './navBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navbar}>
        <li>
          <NavLink className={({ isActive }) => cx({ [styles.clicked]: isActive })} to='/'>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => cx({ [styles.clicked]: isActive })} to='favorite'>
            Favorite
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
