import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';
import Form4 from './Forms/Form4';
import Form5 from './Forms/Form5';
import Form6 from './Forms/Form6';
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
          <Route path= '/Form2'>
            <Form2/>
          </Route>
          <Route path= ''>
            <Form3/>
          </Route>
          <Route path=''>
            <Form4/>
          </Route>
          <Route path=''>
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
