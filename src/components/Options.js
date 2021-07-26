import React from 'react'

export default function Options({handleOption}) {
    return (
        <div>
    <div className='options'>
        <div onClick={() => handleOption('people')}>People</div>
        <div onClick={() => handleOption('starships')}>StarShip</div>
        <div onClick={() =>handleOption('planets')}>Planets</div>
        <div onClick={() =>handleOption('films')}>Films</div>

</div>
        </div>
    )
}
