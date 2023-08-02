import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/contactScreens/Home';
import LandingPage from './components/login/LandingPage';
// import Counter from './components/Counter';


function App() {
  const time = 30;
  const direction = 'clockwise';
  const funct = () => {
    console.log("completed");
  }
  return (
    <div className="App">
      <h2></h2>
      {/* <div>
        <Counter time = {time} direction = {direction} funct = {funct} />
      </div> */}
      {/* <div>
        <Counter time = {time} direction = {`anticlockwise`} funct = {funct} />
      </div> */}
      <div>
        <BrowserRouter>
          <LandingPage/>
        </BrowserRouter>
        {/* <Home/> */}
      </div>
    </div>
  );
}

export default App;
