import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import {originals, action} from './urls'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Banner />
    <RowPost url={originals} title='Netflix originals'/>
    <RowPost url={action} title='Action' isSmall={true}/> 
    </div>
  );
}

export default App;
