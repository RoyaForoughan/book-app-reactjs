
import PropTypes from 'prop-types'
import styles from './SideCard.module.css'

function SideCard({data:{image , title}}) {
    SideCard.propTypes = {
        data: PropTypes.object.isRequired,
      }; 
  return (
    <div className={styles.card}>
        <img src={image} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

export default SideCard