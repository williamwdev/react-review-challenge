import React, { useState } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

/** The Challenge: Fetch List from API
 * Fetch data from an API when the Fetch Data button is clicked
 * Render details from the data returned
 */

export default function FetchAPI(props) {
  const [books, setBooks] = useState([]);

  const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';

  const fetchData = async () => {
    const response = await axios.get(apiURL);
    setBooks(response.data);
  };

  const renderListOfBooks = books.map((book, index) => {
    const fixedDate = new Date(book.released).toDateString();
    const authors = book.authors.join(', ');
    return (
      <div className="book" key={index}>
        <h3>Book {index + 1}</h3>
        <h2>{book.name}</h2>

        <div className="details">
          <p>👨: {authors}</p>
          <p>📖: {book.numberOfPages}</p>
          <p>🏘️: {book.country}</p>
          <p>⏰: {fixedDate}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="FetchAPI-container">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">{renderListOfBooks}</div>
    </div>
  );
}
