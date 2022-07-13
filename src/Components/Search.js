import React, { useState } from "react";
import TextField from '@mui/material/TextField';

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState("");
    const handleInputChange = value => {
        setSearch(value);
        onSearch(value);
    };

    return (
        <TextField
            variant="outlined" 
            value={search}
            onChange={e => handleInputChange(e.target.value)}
            />
    )
}

export default Search;