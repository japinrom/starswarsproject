import {useState,useEffect} from 'react'

export function useGetData({page}) {

    const baseURL = 'https://swapi.dev/api/'
    const [info,setInfo] = useState([])
    const [error,setError] = useState()
    const [loading,setLoading] = useState(false)

    useEffect(function() {
        setLoading(true)
        fetch(`${baseURL}/${page}`)
        .then(res => res.json())
        .then(data => {
            setInfo(data)
            setLoading(false)

        })
        .catch(err => setError(err))



    },[page])

    return {loading,info,error};
}
