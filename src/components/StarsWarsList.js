import React from 'react'
import Card from '../components/Card'

export default function StarsWarsList({data,handleModal}) {


        return ( 
            <div className="list">
                 {
                     data.map(result => {
                         return <Card 
                                    key={result.name||result.title} 
                                    name={result.name} 
                                    title={result.title}
                                    handleModal={handleModal}
                                    ></Card>
                     })
                    }   
             </div>
         )
}
