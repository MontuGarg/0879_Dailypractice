import logo from './logo.svg';
import './App.css';
import Header from './component/header';
const name="montu";
const x=true;
function App() {
  return (
    
    <div className="App">
      <Header />
      <h1>h1 heading</h1>
      <h1>{name}</h1>
      <h1>{26+22}</h1>
      <h1>{x? "yes":"no"}</h1>
    </div>
  );
}

export default App;
