import './App.css';
import Navbar from './components/Navbar';
import SightCard from './components/SightCard';
import data from './data'

function App() {

  var sightCards = data.map(
    sightContent => {
      return (<SightCard 
        key={sightContent.id}
        data={sightContent}
      />)
    }
  )

  return (
    <div className="App">
      <Navbar />
      <div className='sights'>{sightCards}</div>
    </div>
  );
}

export default App;
