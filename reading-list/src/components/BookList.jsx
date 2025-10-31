import '../App.css';

function BookList(){
  return(
      <div className={'booklist-container'}>
        <div className={'booklist-header'}>
          <h2>Your books</h2>
          <select>
            <option>Sort: Recently added</option>
            <option>Sort: Title(A-Z)</option>
            <option>Sort: Author(A-Z)</option>
          </select>
          <select>
            <option>Row: 10</option>
            <option>Rows: 20</option>
            <option>ROws: 50</option>
          </select>
        </div>
        <div className={'booklist-maincontent'}>
          <input type={"checkbox"}/>
          <h2>The Pragmatic Programmer</h2>
          <p>Andrew Hunt, David Thomas • Tech</p>
          <button>Mark as read</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div className={'booklist-footercontent'}>
          <p>Showing 1-10 of 42</p>
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
  )
}

export default BookList;
