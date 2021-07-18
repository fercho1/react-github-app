import React from 'react'
import { useFetchUserData } from '../hooks/useFetchUserData';
import { GridItem } from './GridItem';

export const UserScreen = () => {

    const { data, loading } = useFetchUserData();

    return (
        <>

            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">

                <GridItem
                    key={data.id}
                    {...data}
                />


            </div>
        </>
    )
}
