import '../App.css';

function QuickActions(){
    return(
        <div className={'quickactions-container'}>
          <h2>Quick actions</h2>
          <button>Export CSV</button>
          <button>Import</button>
          <button>Clear read</button>
          <button>Clear all</button>
        </div>
    )
}

export default QuickActions;
