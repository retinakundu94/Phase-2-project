import  { Switch, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home';
import CafeList from './CafeList';
import CafeForm from './CafeForm';

function App() {

  return (
    <Router>
    <div className="App">

      <Navbar />

      <h1>Aesthetic Cafes in NYC</h1>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cafes" component={CafeList} />
          <Route path="/add-cafe" component={CafeForm} />
        </Switch>

      <Outlet />

    </div>
    </Router>
  )
}

export default App

// routing --> multiple pages

// server --> json-server

// RESTUL ROUTES

// GET /movies --> data for ALL movies

// GET /movies/1 --> data for the first movie (a.k.a. movie with id of 1)

// POST /movies --> create data for a movie

// PATCH /movies/1 --> update data for movie with id 1

// DELETE /movies/1 --> delete data for movie with id 1


// FRONTEND

// GET /home --> everything
