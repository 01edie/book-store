import './App.css';
import React from 'react'
import Book from './components/Book';
import './App.css';
import BookRecords from './db/Book';

function App() {
  return (
    <section className='book-store'>
    <h1 className='book-store-title'>my book store</h1>
    <div className="books">
    { BookRecords.map(
        (book)=>
        <Book bookImage = {book.image} key={book.id} title={book.title} author={book.author} price={book.price}/>) }
    </div>
    </section>
  );
}

export default App;
