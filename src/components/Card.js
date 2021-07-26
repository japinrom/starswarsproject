import React from 'react'

export default function Card({title,name}) {
    return (
        <div className="card">
            <div className="information">
                <p>{title}</p>
                <p>{name}</p>
            </div>

        </div>
    )
}
