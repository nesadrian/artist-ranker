import React from 'react'
import Card from './Card'

export default ({ artists, changeRating }) => {
    return (
        <div>
            {artists.map(artist => <Card artist={artist} changeRating={changeRating} />)}
        </div>
    )
}
