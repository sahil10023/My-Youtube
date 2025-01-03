import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
        <h1 className='text-red-700 text-3xl'>Hello world</h1>
      </div>
    </Provider>
  );
}

export default App;
