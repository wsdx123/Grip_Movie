import styles from './Routes.module.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Layout from 'components/layout'
import Favorite from './favorite'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='favorite' element={<Favorite />} />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
