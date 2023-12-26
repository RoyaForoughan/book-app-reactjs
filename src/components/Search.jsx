import { LuSearch } from "react-icons/lu";
import PropTypes from 'prop-types'
import styles from './Search.module.css'

function Search({search , setSearch , searchHandler}) {
    Search.propTypes = {
        search: PropTypes.object.isRequired,
        setSearch:PropTypes.object.isRequired,
        searchHandler:PropTypes.func.isRequired
      }; 
  return (
    <div className={styles.search}>
        <input type="text" placeholder="Search title" value={search}
         onChange={(e) => setSearch(e.target.value.toLowerCase())} />
        <button onClick={searchHandler}><LuSearch  /></button>
    </div>
  )
}

export default Search