import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './List';
import Form from './Form'

const mock = [
    {
        id: 0,
        name: "Britney Spears",
        rating: 1,
        picurl: ""
    }
]

export default () => {
    const [artists, setArtists] = useState(mock || []);

    const addArtist = name => {
        const artist = {
            id: uuidv4(),
            name,
            rating: 0,
            picurl: ''
        }
        setArtists([...artists, artist]);
    }

    return (
        <main>
            <Form addArtist={addArtist} />
            <List artists={artists} />
        </main>
    )
}
