import styles from './Layout.module.css'
import PropTypes from 'prop-types'

function Layout({children}) {
  Layout.propTypes = {
    children: PropTypes.func.isRequired,
  }; 
  return (
    <>
        <header className={styles.header}>
        <h1>Books App</h1>
        <p>
            <a>My Books App | React.js</a>
        </p>
        </header>
        {children}
        <footer className={styles.footer}>Developed By Me</footer>
    </>
  )
}

export default Layout