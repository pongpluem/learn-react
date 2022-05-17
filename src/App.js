import logo from './logo.svg';
import './App.css';
import Hi from './Hi';
import {HiFunc} from './HiFunc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Hi name="AnuchitO"></Hi> */}
        <HiFunc name="Nong" skill="english" />
        {/* <ShowCounter /> */}
        {/* <CleanUpDemo /> */}
     
      </header>

      <p>test</p>
    </div>
  );
}

export default App;
