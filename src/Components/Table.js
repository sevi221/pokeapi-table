import React, { useState, useEffect, useMemo } from 'react';
import Search from './Search';
import TableHeader from './TableHeader';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

const Table = () => {
    const [pokemonData, setQuestionData] = useState([]);
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const [search, setSearch] = useState("");

    const tHeaders = [
        { name: "Name", field: "name", isSortable: true },
        { name: "url", field: "url", isSortable: false },
    ];

    useEffect(() => {
        const fetchData = () => {
            fetch('https://pokeapi.co/api/v2/pokemon/')
                .then(response => response.json())
                .then((res) => {
                    let pokemon = [];
                    for (let [key, item] of Object.entries(res.results)) {
                        pokemon.push({
                            id: key,
                            name: item.name,
                            url: item.url,
                        })
                    }
                    setQuestionData(pokemon)
                }
                )
                .catch(err => console.error(err))
        }
        fetchData()
    }, [])

    const pokeDataTable = useMemo(() => {
        let computedPokemon = pokemonData;

        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedPokemon = computedPokemon.sort(
                (a, b) =>
                    reversed * b[sorting.field].localeCompare(a[sorting.field])
            );
        }
        if (search) {
            computedPokemon = computedPokemon.filter(
                computedQuestions =>
                    computedQuestions.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        return computedPokemon

    }, [pokemonData, sorting, search]);


    return (
        <>
            <Search
                onSearch={val => setSearch(val)}
            />
            <TableContainer component={Paper}>
            <TableHeader
                tHeaders={tHeaders}
                onSorting={(field, order) =>
                    setSorting({ field, order })
                }
                />
                <TableBody>
                    {pokeDataTable?.map((poke) => (
                        <TableRow 
                            key={poke.name} 
                            onClick={() => console.log(poke)}>
                            <TableCell>{poke.name}</TableCell>
                            <TableCell>{poke.url}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableContainer>
        </>
    );
}

export default Table;