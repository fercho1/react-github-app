import { useEffect, useState } from "react"
import { getUserData } from "../helpers/getUserData";


export const useFetchUserData = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getUserData()
            .then(user => {



                setState({
                    data: user,
                    loading: false
                })



            })
    }, [])



    return state;
}