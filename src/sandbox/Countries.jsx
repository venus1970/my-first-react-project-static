import React, { useEffect, useState, useMemo, useCallback } from 'react';
import axios from "axios";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Paper, Button } from '@mui/material';

export default function Countries() {
    const [countriesList, setCountriesList] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const getAllCountries = useCallback(async () => {
        try {
            setCountriesList([]);
            const response = await axios.get("https://restcountries.com/v3.1/all");
            console.log("got all countries");
            setCountriesList(response.data);
        } catch (error) {
            console.log("Error:", error);
        }
    }, []);//In our case, getAllCountries doesn't depend on any external variables or props, so it's safe to keep its dependency array empty.
  // Since getAllCountries doesn't have any dependencies outside its scope, we should indeed keep the dependency array empty. It means that the component will re-render 1 time only when the component is mounted and unmounted.

    useEffect(() => {
        getAllCountries();
        console.log("The countries component has mounted");
    }, [getAllCountries]);

    const handleRefresh =useCallback(() => {
        console.log("Countries list is refreshing");
        setRefresh(!refresh);
  }, [refresh]);
  //In this case, you're defining a callback function named handleRefresh that toggles the refresh state when called. It also logs a message to the console indicating that the countries list is refreshing. This function will remain the same across re-renders as long as the refresh state remains the 
  //The second argument of useCallback is an array of dependencies. In your case, the only dependency is refresh. This means that the memoized version of handleRefresh will be recreated whenever the refresh state changes. By specifying refresh as a dependency, you ensure that the memoized function is always up-to-date with the latest value of refresh.
  //by using useCallback, you're optimizing the performance of your component by memoizing the handleRefresh function. This prevents unnecessary re-renders of components that use handleRefresh as a prop, ensuring that they don't re-render unless refresh changes.

    const memoizedCountries = useMemo(() => {
        return countriesList.map(country => (
            <TableRow key={country.name.common}>
                <TableCell sx={{ borderRight: '1px solid #ccc' }}>{country.name.common}</TableCell>
                <TableCell sx={{ borderRight: '1px solid #ccc' }}>{country.capital && country.capital[0]}</TableCell>
                <TableCell sx={{ borderRight: '1px solid #ccc' }}>{country.languages && country.languages[Object.keys(country.languages)[0]]}</TableCell>
                <TableCell sx={{ fontWeight: '600', fontSize: '18px' }}>
                    <Avatar alt={country.name.common} src={country.flags.svg} />
                </TableCell>
            </TableRow>
        ));
  }, [countriesList]); //Memoized countries list to avoid unnecessary re-renders: this is a performance optimization technique. here useMemo is used to create a new array that will be passed to the parent component and by that we can avoid unwanted re-renders: this is a performance optimization technique. here declared countriesList as a dependency array to avoid unnecessary re-renders: this is a performance optimization technique because countriesList is an external variable and it's value changes on each render.

    return (
        <Box mt={2}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: '600', fontSize: '28px' }}>Countries List</Typography>
            <Box mt={2}>
                <Button onClick={handleRefresh} variant="contained" color="primary">Refresh</Button>
            </Box>
            <Box mt={2}>
               {countriesList.length === 0 ? (
                    <Typography>Loading...</Typography>
                ) : (
                    <TableContainer component={Paper} sx={{ backgroundColor: '#f0f0f0' }}>
                        <Table sx={{ border: '1px solid #ccc' }}>
                            <TableHead>
                                {countriesList.length > 0 && (
                                    <TableRow sx={{ backgroundColor: 'pink'}}>
                                        <TableCell sx={{ borderRight: '1px solid #ccc', fontWeight: '600', fontSize: '18px' }}>Country</TableCell>
                                        <TableCell sx={{ borderRight: '1px solid #ccc', fontWeight: '600', fontSize: '18px' }}>Capital</TableCell>
                                        <TableCell sx={{ borderRight: '1px solid #ccc', fontWeight: '600', fontSize: '18px' }}>Language</TableCell>
                                        <TableCell sx={{ fontWeight: '600', fontSize: '18px' }}>Flag</TableCell>
                                    </TableRow>
                                )}
                            </TableHead>
                            <TableBody>
                                {memoizedCountries}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </Box>
    );
}
