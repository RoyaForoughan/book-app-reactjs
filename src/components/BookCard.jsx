import PropTypes from 'prop-types'
import { useState } from 'react';
import { FaHeart } from "react-icons/fa6";
import styles from './BookCard.module.css'

function BookCard({data ,handelLikedList}) {
  const {title , author , image , pages , language} = data
  BookCard.propTypes = {
    data: PropTypes.object.isRequired,
    handelLikedList:PropTypes.func.isRequired
  }; 
  

  const  [like , setLike] = useState(false)

  const likeHandler = () => {
    handelLikedList(data , like)
    setLike(like => !like)
  }

  return (
    <div className={styles.card}>
        <img src={image} alt={title}/>
        <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
        </div>
        <button onClick={likeHandler}>
          <FaHeart color={like ? 'red' : '#e0e0e0'} fontSize='1.8rem' />
        </button>
    </div>
  )
}

export default BookCard

