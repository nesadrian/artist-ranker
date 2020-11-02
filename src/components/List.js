import React from 'react'
import Card from './Card'

export default ({ artists, changeRating }) => {
    return (
        <div>
            {artists.map(artist => <Card key={artist.id} artist={artist} changeRating={changeRating} />)}
        </div>
    )
}
