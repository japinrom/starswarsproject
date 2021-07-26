import React,{useState} from 'react'
import { useGetData } from '../hooks/useGetData'
import StarsWarsList from '../components/StarsWarsList'
import Options from '../components/Options'
export default function StarsWarsPage() {

    const [page,setPage] = useState('people')
    const { error,loading,info } = useGetData({page: page})



const handleOption = (name) => {
    setPage(name)
}

if(error)
    return (
        <div>Hay un error</div>
    )

    return (
        <>

        <Options handleOption={handleOption}></Options>

        { loading ? <div>Loading...</div> :<StarsWarsList data={info}></StarsWarsList>}
        </>

    )
}


