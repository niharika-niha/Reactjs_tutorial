import logo from './logo.svg';
import './App.css';
import Name,{AName} from './Basics/FunctionComp';
import CName from './Basics/ClassComp';
import Counter from './Basics/Counter';
import ParentComp from './Basics/Method as props/ParentComp';
import Clickme from './Basics/Clickme';
function App() {
  return (
    <div className="App">

      {/* component types */}
     
     {/* <Name name="Niharika"/>
     <AName name="niharika"/>
     <CName/> */}

     {/* setState */}
     {/* <Counter/> */}

     {/* method as props */}
     {/* <ParentComp/> */}

{/* List rendering and conditional rendering */}
    <Clickme/>






     
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
