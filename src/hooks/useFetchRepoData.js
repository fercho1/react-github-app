import { useEffect, useState } from "react"
import { getRepoData } from "../helpers/getRepoData";


export const useFetchRepoData = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getRepoData()
            .then(repo => {



                setState({
                    data: repo,
                    loading: false
                })



            })
    }, [])



    return state;
}