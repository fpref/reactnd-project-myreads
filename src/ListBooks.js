import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeBookShelf: PropTypes.func.isRequired
    }

    render() {
        const {books, onChangeBookShelf} = this.props

        return (                  
            <ol className="books-grid">
                {books.map((book) => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ 
                                  width: 128, 
                                  height: 193, 
                                  backgroundSize  : '128px 193px', 
                                  backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : "https://books.google.com/googlebooks/images/no_cover_thumb.gif"})` 
                                  }}
                                >
                                </div>
                                <div className="book-shelf-changer">
                                    <select value={(book.shelf) ? book.shelf : "none"} onChange={(event) => onChangeBookShelf(book, event.target.value)}>
                                        <option value="none1" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            {book.authors && book.authors.map((author) =>(<div className="book-authors" key={author}>{author}</div>))}  
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListBooks