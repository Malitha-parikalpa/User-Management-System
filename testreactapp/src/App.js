import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();
//comment

  return (
    <div className="App">
      <header className='App-Header'>
       <h1>Welcome to Maliboycode vlog</h1>
       <button className='user-button' onClick={()=>navigate('/users')}>Users</button>
      </header>
    </div>
  );
}

export default App;
