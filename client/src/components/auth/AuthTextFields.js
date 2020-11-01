import React from 'react';
import { TextField } from '@material-ui/core';

function AuthTextField(props) {

    return (
    <TextField 
        variant="standard" 
        {...props}
    />
    )
}

export default AuthTextField;