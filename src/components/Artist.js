import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default ({ artists, updateArtist }) => {
    const [inputNameVal, setInputNameVal] = useState('');
    const [inputUrlVal, setInputUrlVal] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { id } = useParams();
    let artist = artists.find(artist => artist.id === id);

    useEffect(() => {
        setInputNameVal(artist.name);
        setInputUrlVal(artist.picurl);
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        const updatedArtist = { ...artist, name: inputNameVal, picurl: inputUrlVal }
        updateArtist(updatedArtist);
        setFormSubmitted(true);
    }

    return (
        <div>
            {formSubmitted && <Redirect to={{ pathname: "/ranker" }} />}
            {artist ? (
                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        value={inputNameVal}
                        id="filled-required"
                        label="Artist Name"
                        variant="outlined"
                        onChange={e => setInputNameVal(e.target.value)}
                    />
                    <TextField
                        value={inputUrlVal}
                        id="filled-required"
                        label="Picture URL"
                        variant="outlined"
                        onChange={e => setInputUrlVal(e.target.value)}
                    />
                    <Link to="/ranker">
                        <Button variant="contained" color="primary">
                            Back
                        </Button>
                    </Link>
                    <Button variant="contained" color="primary" type="submit">
                        Save
                    </Button>
                </form>
            ) : <h1>No artist found</h1>}
        </div>
    )
}
