import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Adduser from './Pages/Adduser';
import Edituser from './Pages/Edituser';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addUser" component={Adduser} />
        <Route exact path="/edituser/:id" component={Edituser} />
      </Switch>
    </div>
  );
}

export default App;
