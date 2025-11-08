import '../App.css';
import {useState} from "react";

function AddBook({addBook}){

  //STATES FOR CONTROLLING THE BOOK
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [tag, setTag] = useState('All');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title: title,
      author: author,
      tag: tag
    }

    //adding the newly created object in the 'bookDetails' array of objects
    addBook(newBook);
    //Clearing out the form fields after submitting
    setTitle('');
    setAuthor('');
    setTag('All');
  }

  const changeTitle = (e) => {
    setTitle(e.target.value);
  }

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  }

  const changeTag = (e) => {
    setTag(e.target.value);
  }

  return(
      <div className={'addbook-container'}>
        <h2>Add a new book</h2>
        <form onSubmit={handleSubmit}>
          <input type={"text"} placeholder={'Title'} value={title} onChange={changeTitle}/>
          <input type={'text'} placeholder={'Author'} value={author} onChange={changeAuthor}/>
          <select value={tag} onChange={changeTag}>
            <option value={'Fiction'}>Fiction</option>
            <option value={'Non-fiction'}>Non-fiction</option>
            <option value={'Tech'}>Tech</option>
            <option value={'Biography'}>Biography</option>
            <option value={'Sci-fi'}>Sci-fi</option>
            <option value={'Self-help'}>Self-help</option>
          </select>
          <button type={"submit"}>Add Book</button>
        </form>
      </div>
  )
}

export default AddBook;
