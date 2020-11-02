import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

export default ({ artist, changeRating }) => {
    return (
        <article>
            <h3>{artist.name}</h3>
            <h3>{artist.rating}</h3>
            <IconButton variant="contained" color="primary" onClick={() => changeRating(artist.id, true)} children={<AddIcon />} />
            <IconButton variant="contained" color="primary" onClick={() => changeRating(artist.id, false)} children={<Remove />} />
        </article>
    )
}
