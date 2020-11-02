import React from 'react';
import List from './List';
import Form from './Form'

export default ({ artists, addArtist, changeRating }) => {
    return (
        <main>
            <h1>Ranking List</h1>
            <Form addArtist={addArtist} />
            <List artists={artists} changeRating={changeRating} />
        </main>
    )
}
