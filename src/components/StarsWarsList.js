import React from 'react'
import Card from '../components/Card'

export default function StarsWarsList({data}) {





        return ( 
       
            <div className="list">
                 {
                     data.map(result => {
                         return <Card key={result.name} name={result.name} title={result.title}></Card>
                     })
                 }
             
             </div>
         )
    


}
