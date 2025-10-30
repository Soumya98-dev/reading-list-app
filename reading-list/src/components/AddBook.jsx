import '../App.css';

function AddBook(){
  return(
      <div className={'addbook-container'}>
        <h2>Add a new book</h2>
        <form>
          <input type={"text"} placeholder={'Title'}/>
          <input type={'text'} placeholder={'Author'}/>
          <button>Add Book</button>
        </form>
      </div>
  )
}

export default AddBook;
