import logo from './logo.svg';
import './App.css';

function App() {
  //add jsx 
  const name = "ilayda"

  //add arrow function with jsx
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Jack"];
    const int = Math.floor(Math.random() * 3);
    return names[int]
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {handleNameChange()}</p>
        <p>{name}</p>
      </header>
    </div>
  );
}

export default App;
