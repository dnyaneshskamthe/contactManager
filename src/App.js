import './App.css';
import Home from './components/contactScreens/Home';
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
        <Home/>
      </div>
    </div>
  );
}

export default App;
