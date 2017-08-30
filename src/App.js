import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ListShelves from './ListShelves'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [
      {
        shelfName: "Currently Reading",
        shelfValue: "currentlyReading"
      }, 
      {
        shelfName: "Want to Read",
        shelfValue: "wantToRead"
      }, 
      {
        shelfName: "Read",
        shelfValue: "read"
      } 
      ]           
  }


  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })

  }

  changeShelf = (book, shelf) =>  {
    
    const books = this.state.books;
    const index = books.map(function(b){
        return b.id;
    }).indexOf(book.id);
    if (index !== -1) {
      books[index].shelf = shelf;
      this.setState({books:books});
    }
    else {
      this.setState(state => ({
        books: state.books.concat([ book ])
      }));   
    }
    BooksAPI.update(book, shelf)
  } 

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
             <ListShelves
              books={this.state.books}
              shelves={this.state.shelves}
              onChangeBookShelf={this.changeShelf}
            />
              <div>



              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
        <Route path='/search' render={({ history }) => (
         
          <div className="search-books">
            <Search
              libraryBooks={this.state.books}
              onChangeBookShelf={this.changeShelf}
            /> 
          </div>
         )}/>        


      </div>
    )
  }
}

export default BooksApp
