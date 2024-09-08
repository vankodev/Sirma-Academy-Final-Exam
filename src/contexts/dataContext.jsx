import { createContext, useState, useEffect } from 'react';
import { parseCSV } from '../utils/csvParser';

const DataContext = createContext();

const DATA_SOURCES = [
    { name: 'matches', file: 'matches.csv' },
    { name: 'players', file: 'players.csv' },
    { name: 'records', file: 'records.csv' },
    { name: 'teams', file: 'teams.csv' },
];

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = {};

                await Promise.all(
                    DATA_SOURCES.map(async (source) => {
                        const response = await fetch(`/data/${source.file}`);
                        const text = await response.text();
                        fetchedData[source.name] = parseCSV(text);
                    })
                );

                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching or parsing CSV data:', error);
            }
        };

        fetchData();
    }, []);

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;
