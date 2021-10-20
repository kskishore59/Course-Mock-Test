import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import ItemDetails from './components/courseItemDetails'
import NotFoundView from './components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/courses/:id" component={ItemDetails} />

      <Route component={NotFoundView} />
    </Switch>
  </div>
)

export default App
