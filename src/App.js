import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import Form6 from './Form6';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Main/>
          </Route>
          <Route path='/Form1'>
            <Form1/>
          </Route>
          <Route>
            <Form2/>
          </Route>
          <Route>
            <Form3/>
          </Route>
          <Route>
            <Form4/>
          </Route>
          <Route>
            <Form5/>
          </Route>
          <Route>
            <Form6/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
