import '../App.css';

function SearchTagFilter(){
  return(
      <div className={'searchtagfilter-container'}>
        <input type={"text"} placeholder={'Search by title or author'}/>
        <button>All</button>
        <button>Fiction</button>
        <button>Non-fiction</button>
        <button>Tech</button>
      </div>
  )
}

export default SearchTagFilter;
