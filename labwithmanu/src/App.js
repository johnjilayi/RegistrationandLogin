import logo from './logo.svg';
import './App.css';
import Routing from './Routing';

function App() {
  return (
    <div className="App">
        <Routing/>
        {/* <LoginForm/> */}
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default App;
