import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class ListShelves extends Component {
  static propTypes = {
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }


 

  render() {
  	const {shelves, books, onChangeBookShelf} = this.props




    return (
          <div className="list-books-content">
          {shelves.map((shelf) => (
            <div className="bookshelf" key={shelf.shelfValue}>
            <h2 className="bookshelf-title">{shelf.shelfName}</h2>
            <div className="bookshelf-books">
             <ListBooks
              books={books.filter((c) => c.shelf === shelf.shelfValue)}
              onChangeBookShelf={onChangeBookShelf}
            />

             
            </div>
            </div>
          ))}
          </div>
    )
  }
}

export default ListShelves