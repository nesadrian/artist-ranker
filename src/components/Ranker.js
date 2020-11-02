import React from 'react';
import List from './List';
import Form from './Form'

export default ({ artists, addArtist, changeRating }) => {
    return (
        <main>
            <Form addArtist={addArtist} />
            <List artists={artists} changeRating={changeRating} />
        </main>
    )
}
