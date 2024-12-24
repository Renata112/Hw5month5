import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/dataActions';

const Page = ({ apiUrl }) => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchData(apiUrl));
    }, [dispatch, apiUrl]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Data from API</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Page;
