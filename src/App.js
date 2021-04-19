
import { useState } from 'react';
import './App.css';
import myimg from './assets/myimg.jpg';
import StripeContainer from './components/StripeContainer';

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>Easy Car </h1>
      {showItem ? <StripeContainer/> : <> <h3>Rs.3000</h3> <img style={{width:400}} src={myimg} alt="mycar" />
      <button onClick={() => setShowItem(true)}>Book  Now</button></>}
    </div>
  );
}

export default App;