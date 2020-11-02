import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default ({ addArtist }) => {
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addArtist(inputVal);
    setInputVal('');
  };

  return (
        <form onSubmit={e => handleSubmit(e)}>
            <TextField
                required
                value={inputVal}
                id="filled-required"
                label="Artist Name"
                variant="outlined"
                onChange={e => setInputVal(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
                Add
            </Button>
        </form>
  );
};
