import React from 'react'
import { useState } from 'react'

const List = ({ openList, setOpenList, myList, setMyList }) => {

  return (
    <div id="myList" onClick={(e) => e.stopPropagation()}>
        <div className="row">
            <div className="close__list" onClick={() => setOpenList(false)}>
                X
            </div>
            <div className='list__title'>My List</div>

            <ul className="list">
                {myList.map((movie, index) => (
                    <li key={index}>
                    <p>{movie.title}</p>
                    <button 
                        className="list__delete"
                        onClick={() => {
                        setMyList(myList.filter((_, i) => i !== index));
                        }}
                    >
                        X
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default List
