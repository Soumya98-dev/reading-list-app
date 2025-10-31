import '../App.css';

function StatsSidebar(){
  return(
      <div className={'statssidebar-container'}>
        <h2>Stats</h2>
        <div className={'statssidebar-stats'}>
          <p>Total Books</p>
          <p>42</p>
          <p>Books read</p>
          <p>13</p>
          <p>Completion</p>
          <p>31%</p>
        </div>
        <div className={'statssidebar-line'}></div>
      </div>
  )
}

export default StatsSidebar;
