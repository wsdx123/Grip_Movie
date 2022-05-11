import { NavLink } from 'react-router-dom'
import styles from './navBar.module.scss'

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <NavLink className={styles.navItem} to='/'>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navItem} to='favorite'>
            Favorite
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
