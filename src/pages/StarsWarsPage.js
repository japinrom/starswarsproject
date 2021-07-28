import React,{useState} from 'react'
import { useGetData } from '../hooks/useGetData'
import StarsWarsList from '../components/StarsWarsList'
import Options from '../components/Options'
import Modal from '../components/Modal'
import Card from '../components/Card'
export default function StarsWarsPage() {

    const [page,setPage] = useState('people')
    const { error,loading,info } = useGetData(page)
    const [modal,setModal] = useState(false)
    const [detailCard,setDetailCard]  = useState()

const handleOption = (name) => {
    setPage(name)
}

const handleModal = ({id}) => {

    if(id) {
    const detail = info.find(info => (info.title||info.name)===id)
    setDetailCard(detail)
    }
    setModal(!modal)
    console.log(modal)
}

const handleClose = () => {
    setModal(!modal)
}

if(error)
    return (
        <div>Error: {error}</div>
    )
    return (
        <>
        <Options handleOption={handleOption}></Options>
        { loading ? <div>Loading...</div> :<StarsWarsList handleModal={handleModal} data={info}></StarsWarsList>}
        {modal && <Modal><Card closeModal={handleClose} {...detailCard}></Card></Modal>}
        </>

    )
}


