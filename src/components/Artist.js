import React from 'react'
import { useParams } from 'react-router-dom'

export default ({ artists }) => {
    const { id } = useParams();
    const artist = artists.find(artist => artist.id === +id);
    return (
        <div>
            {artist ? (<h1>{artist.name}</h1>) : <h1>No artist found</h1>}
        </div>
    )
}
