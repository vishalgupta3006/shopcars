import { Provider } from 'react-redux';
import './App.css';
import Routes from './Routes';
import store from './app/store';
function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <Routes/>
    </div>
    </ Provider>
  );
}

export default App;
