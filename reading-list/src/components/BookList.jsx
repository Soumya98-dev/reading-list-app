import '../App.css';
import {use, useState} from "react";

function BookList({bookDetails, editBook}) {
  const [isEditing, setIsEditing] = useState(null);

  //STATE FOR EDITED BOOK DETAILS
  const [editedTitle, setEditedTitle] = useState('');
  const [editedAuthor, setEditedAuthor] = useState('');
  const [editedTag, setEditedTag] = useState('');

  //TO SHOW THE EDIT DIALOG OR NOT
  const handleEdit = (id) => {
    const bookToEdit = bookDetails.find(b => b.id === id);
    setEditedTitle(bookToEdit.title);
    setEditedAuthor(bookToEdit.author);
    setEditedTag(bookToEdit.tag);
    setIsEditing(isEditing === id ? null : id);
  }

  const onSaveEdit = (e, id) => {
    e.preventDefault();
    editBook(id, {title: editedTitle, author: editedAuthor, tag: editedTag});
    setEditedTitle('');
    setEditedAuthor('');
    setEditedTag('');
    setIsEditing(null);
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
                  <form onSubmit={(e) => onSaveEdit(e,book.id)}>
                    <input type={"text"} value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)}/>
                    <input type={"text"} value={editedAuthor} onChange={(e) => setEditedAuthor(e.target.value)}/>
                    <select value={editedTag} onChange={(e) => setEditedTag(e.target.value)}>
                      <option>Fiction</option>
                      <option>Non-fiction</option>
                      <option>Tech</option>
                      <option>Biography</option>
                      <option>Sci-fi</option>
                      <option>Self-help</option>
                    </select>
                    <button type={"submit"}>Save</button>
                    <button onClick={() => setIsEditing(null)} type={"button"}>Cancel</button>
                  </form>
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
