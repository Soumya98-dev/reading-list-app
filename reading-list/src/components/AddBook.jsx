import '../App.css';

function AddBook({addBook}){

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {

    }
  }

  return(
      <div className={'addbook-container'}>
        <h2>Add a new book</h2>
        <form>
          <input type={"text"} placeholder={'Title'}/>
          <input type={'text'} placeholder={'Author'}/>
          <select>
            <option value={'Fiction'}>Fiction</option>
            <option value={'Non-fiction'}>Non-fiction</option>
            <option value={'Tech'}>Tech</option>
            <option value={'Biography'}>Biography</option>
            <option value={'Sci-fi'}>Sci-fi</option>
            <option value={'Self-help'}>Self-help</option>
          </select>
          <button>Add Book</button>
        </form>
      </div>
  )
}

export default AddBook;
