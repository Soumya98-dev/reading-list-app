import '../App.css';
import {useState} from "react";

function BookList({bookDetails}) {
  const [isEditing, setIsEditing] = useState(null);

  const handleEdit = (id) => {
    setIsEditing(id);
    setIsEditing(isEditing === id ? null : id);
  }

  return (
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
        {bookDetails.map((book) => (
            isEditing === book.id ? (
                // EDIT VIEW
                <div key={book.id} className={'booklist-maincontent-editdialog'}>
                  <input type={"text"} defaultValue={book.title}/>
                  <input type={"text"} defaultValue={book.author}/>
                  <select defaultValue={book.tag}>
                    <option>Fiction</option>
                    <option>Non-fiction</option>
                    <option>Tech</option>
                    <option>Biography</option>
                    <option>Sci-fi</option>
                    <option>Self-help</option>
                  </select>
                  <button>Save</button>
                  <button onClick={() => setIsEditing(null)}>Cancel</button>
                </div>
            ) : (
                // NORMAL VIEW
                <div key={book.id} className={'booklist-maincontent'}>
                  <input type={"checkbox"}/>
                  <h2>{book.title}</h2>
                  <p>{book.author} . {book.tag}</p>
                  <button>Mark as read</button>
                  <button onClick={() => handleEdit(book.id)}>Edit</button>
                  <button>Delete</button>
                </div>
                )
        ))}
        <div className={'booklist-footercontent'}>
          <p>Showing 1-10 of 42</p>
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
  )
}

export default BookList;
