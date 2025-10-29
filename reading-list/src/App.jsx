import './App.css';
import Header from "./components/Header.jsx";
import AddBook from "./components/AddBook.jsx";
import SearchTagFilter from "./components/SearchTagFilter.jsx";
import BookList from "./components/BookList.jsx";
import StatsSidebar from "./components/StatsSidebar.jsx";
import QuickActions from "./components/QuickActions.jsx";
import TagsCloud from "./components/TagsCloud.jsx";

function App(){
  return(
      <div className={'app-container'}>
        <Header/>
        <AddBook/>
        <SearchTagFilter/>
        <BookList/>
        <StatsSidebar/>
        <QuickActions/>
        <TagsCloud/>
      </div>
  )
}

export default App;