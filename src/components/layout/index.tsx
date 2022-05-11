import { Outlet } from 'react-router-dom'

import styles from './layout.module.scss'
import NavBar from 'components/navBar'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <header>
        <h1 className={styles.title}>Grip Movie</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <NavBar />
      </footer>
    </div>
  )
}

export default Layout
