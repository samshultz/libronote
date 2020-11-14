import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Dashboard from "./components/notes/dashboard"
import UpdateNote from "./components/notes/Edit"
import ViewNote from "./components/notes/Detail"

function App() {
  return (
  	<Router>
  		<Switch>
          <Route path="/notes/update/:noteId" exact>
            <UpdateNote />
          </Route>
          <Route path="/notes/:noteId" exact>
          	<ViewNote />
          </Route>
          <Route path="/" exact>
	      	<Dashboard />
          </Route>
          
        </Switch>
	    <div className="App">
	    </div>
    </Router>
  );
}

export default App;
