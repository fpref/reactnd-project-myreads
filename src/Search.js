import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  static propTypes = {
    libraryBooks: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }

  state = {
    foundBooks: []
  }

  updateQuery = (query) => {
    query = query.trim();
    if (query) {
      BooksAPI.search(query, 10).then(data => {
          if (data && data.length > 0) {
            const bookIds = data.map(b => b.id);
            this.props.libraryBooks.forEach(function(libraryBook) {
                const index = bookIds.indexOf(libraryBook.id);
                if (index !== -1) {
                    data[index].shelf = libraryBook.shelf;
                }
            })
            this.setState({foundBooks: data})            
          }

      }
      )    
    }
    else {
      this.setState({foundBooks:[]})
    }
  }
 
  changeShelfInSearch = (book, shelf) =>  {
    
    const books = this.state.foundBooks;
    const index = books.map(function(b){
        return b.id;
    }).indexOf(book.id);
    if (index !== -1) {
      books[index].shelf = shelf;
      this.setState({foundBooks:books});
      this.props.onChangeBookShelf(book, shelf);
    }
  } 

  render() {   
    const {foundBooks} = this.state
  

    return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                  
                  onChange={(event) => this.updateQuery(event.target.value)}
                />                
              </div>
            </div>
            {foundBooks && foundBooks.length > 0 && (<div className="search-books-results">
              <ListBooks
                books={foundBooks}
                onChangeBookShelf={this.changeShelfInSearch}
              />
            </div>)}
          </div>
    )
  }
}

export default Search