import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Ranker from './components/Ranker'
import Artist from './components/Artist'
import './App.css';

function App() {
  const [artists, setArtists] = useState([]);

  const addArtist = name => {
    const artist = {
      id: uuidv4(),
      name,
      rating: 0,
      picurl: '',
    }
    setArtists([...artists, artist]);
  }

  const changeRating = (id, isIncrementing) => {
    const newArtists = artists.map(artist => {
      if (artist.id === id) {
        return { ...artist, rating: (isIncrementing ? artist.rating + 1 : artist.rating - 1) }
      } else {
        return artist;
      }
    })
    setArtists(newArtists);
  }

  const updateArtist = updatedArtist => {
    const oldArtists = artists.filter(artist => artist.id !== updatedArtist.id);
    const updatedArtists = [...oldArtists, updatedArtist]
    setArtists(updatedArtists);
  }

  return (
    <div className="App">
      <header>
        <h1>Artist Ranker</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/ranker">
            <Ranker artists={artists} changeRating={changeRating} addArtist={addArtist} />
          </Route>
          <Route exact path="/artist/:id">
            <Artist artists={artists} updateArtist={updateArtist} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
