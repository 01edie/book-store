import React from 'react'


const Book = (props) => {
  //handler function
  const clickHandler = (title) => {
    console.log(title);
    alert(`"${title}" has been added to cart`);
  }
  const { bookImage, title, author, price } = props
  return (
    <article className='book'>
      <div className="book-img-container">
        <img className='book-img' src={bookImage} alt="book" />
      </div>
      <h2 className="book-title">{title}</h2>
      <h3 className="book-author">{author.toUpperCase()}</h3>
      <h4 className="book-price">{price}</h4>
      <button className='btn-cart' type='button' onClick={() => clickHandler(title)}>Add to Cart</button>
    </article>
  )
}

export default Book