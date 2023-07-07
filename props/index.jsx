import { useState, useEffect } from 'react';

export function useProperties() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { hits } = require('features/data/Properties.json');
                setProperties(hits);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchData();
    }, []);

    return {
        props: {properties}
    };
}
