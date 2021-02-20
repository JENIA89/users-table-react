import { Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import HeaderComponent from './components/Headers/Header';
import Greet from './components/Greet/Greet';
import Users from './components/Users/Users';

function App() {
  return (
    <div className='App'>
      <HeaderComponent />
      <Route exact path='/' component={Greet} />
      <Route path='/users' component={Users} />
    </div>
  );
}

export default App;
