import './App.css';
import Header from "./components/Header.jsx";
import AddBook from "./components/AddBook.jsx";
import SearchTagFilter from "./components/SearchTagFilter.jsx";
import BookList from "./components/BookList.jsx";
import StatsSidebar from "./components/StatsSidebar.jsx";
import QuickActions from "./components/QuickActions.jsx";
import TagsCloud from "./components/TagsCloud.jsx";
import {useState} from "react";

function App(){
  //STATE FOR LIST OF BOOKS (TITLE & AUTHOR)
  const [bookDetails, setBookDetails] = useState([]);

  const addBook = (newBook) => {
    setBookDetails([...bookDetails, newBook]);
  }

  return(
      <div className={'app-container'}>
        <Header/>
        <div className={'app-main-layout'}>
          <div className={'app-left-column'}>
            <AddBook addBook={addBook}/>
            <SearchTagFilter/>
            <BookList bookDetails={bookDetails}/>
          </div>
          <div className={'app-right-column'}>
            <StatsSidebar/>
            <QuickActions/>
            <TagsCloud/>
          </div>
        </div>
      </div>
  )
}

export default App;