import React from 'react'
import Card from './Card'

export default ({ artists }) => {
    return (
        <div>
            {artists.map(artist => <Card artist={artist} />)}
        </div>
    )
}
