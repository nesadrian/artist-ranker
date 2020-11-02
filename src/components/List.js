import React from 'react'
import Card from './Card'

export default ({ artists, changeRating }) => {
	return (
		<div>
			{artists
				.sort((a, b) => a.rating === b.rating ? a.name.localeCompare(b.name) : b.rating - a.rating)
				.map(artist => <Card key={artist.id} artist={artist} changeRating={changeRating} />)
			}
		</div>
	)
}
