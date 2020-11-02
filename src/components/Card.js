import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

export default ({ artist }) => {
    return (
        <article>
            <h3>{artist.name}</h3>
            <h3>{artist.rating}</h3>
            <IconButton variant="contained" color="primary" children={<AddIcon />} />
            <IconButton variant="contained" color="primary" children={<Remove />} />
        </article>
    )
}
