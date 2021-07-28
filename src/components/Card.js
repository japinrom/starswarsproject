import React from 'react'

export default function Card({title,name,handleModal,height,mass,hair_color,model,manufacturer,diameter,climate,episode_id,opening_crawl,closeModal}) {
    return (
        <div className={handleModal ? "card" : "detail"} onClick={handleModal ? () => handleModal({id: title||name}) : null}> 
        { closeModal ? <div className="close" onClick={() => closeModal()}>X</div> : null}
            <div className="information">
                {!handleModal && <h1>Detail</h1>}
                { title && <p>{title}</p>}
                { name && <p> {name}</p>}
                { height && <p>height: {height}</p>}
                { mass && <p>mass: {mass}</p>}
                { hair_color && <p>hair color: {hair_color}</p>}
                { model && <p>model: {model}</p>}
                { manufacturer && <p>manufacturer: {manufacturer}</p>}
                { diameter && <p>diameter: {diameter}</p>}
                { climate && <p>Climate: {climate}</p>}
                { episode_id && <p>Episode: {episode_id}</p>}
                { opening_crawl && <p>opening_crawl: {opening_crawl}</p>}
            </div>
        </div>
    )
}
