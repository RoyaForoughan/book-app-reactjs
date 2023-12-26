import { books as bookData } from "../constants/mockData"
import BookCard from  '../components/BookCard'
import { useState } from "react"
import SideCard from "./SideCard"
import styles from './Book.module.css'
import Search from "./Search"
function Book() {
  const [books , setBooks] = useState(bookData)
  const [search , setSearch] = useState([])
  const [liked , setLiked] = useState([])

  const handelLikedList = (book , status) => {
    if(status) {
        const newLikedList = liked.filter((i) => i.id !== book.id)
        setLiked(newLikedList)
    }else{
      setLiked((liked) => [...liked , book] )
    }
  }

  const searchHandler = () => {
    if(search){
      const newBooks = bookData.filter(book => book.title.toLowerCase().includes(search))
      setBooks(newBooks)
    }else{
      setBooks(bookData)
    }
  }


  return (
    <>
    <Search search={search} setSearch={setSearch} searchHandler={searchHandler} />
    <div className={styles.container}>
       <div className={styles.cards}> {books.map(book =>( 
       <BookCard key={book.id} data={book} handelLikedList={handelLikedList}/>
       ))}
       
       </div>
       {!!liked.length && 
        <div className={styles.favorite}>
            <h4>Favorite</h4>
            {liked.map(book=> <SideCard  key={book.id} data={book}/>)}
          </div>}
    </div>
    </>
  )
}

export default Book