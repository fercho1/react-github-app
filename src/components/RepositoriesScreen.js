import React from 'react'
import { useFetchRepoData } from '../hooks/useFetchRepoData';
import { RepoList } from './RepoList';

export const RepositoriesScreen = () => {

    const { data, loading } = useFetchRepoData();


    return (
        <>
            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">

            {
                    data.map(repo => (
                        <RepoList
                            key={repo.id}
                            {...repo}
                        />
                    ))
                }


            </div>
        </>
    )
}
