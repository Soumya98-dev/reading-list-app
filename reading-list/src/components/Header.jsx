import '../App.css';

function Header(){
  return(
      <div className={'header-container'}>
        <div className={'header-logo'}>
          <p>📚 Reading List</p>
        </div>
        <div className={'header-options'}>
          <button>All Books</button>
          <button>Completed</button>
          <button>To Read</button>
        </div>
      </div>
  )
}

export default Header;
