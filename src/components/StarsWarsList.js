import React from 'react'
import Card from '../components/Card'

export default function StarsWarsList({data}) {


    const results = data.results

    console.log(results)

    console.log(data.results)

    return ( 
        <div className="list">
            {
                results.map(result => {
                    return <Card name={result.name} title={result.title}></Card>
                })
            }
        
        </div>
    )
}
