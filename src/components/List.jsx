import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const List = ({ openList, setOpenList, myList, setMyList }) => {

    const navigate = useNavigate();

  return (
    <div id="myList" onClick={(e) => e.stopPropagation()}>
        <div className="row">
            <div className="close__list" onClick={() => setOpenList(false)}>
                <FontAwesomeIcon icon={faX} />
            </div>
            <h3 className='list__title'>My List</h3>

            <ul className="list">
                {myList.map((movie, index) => (
                    <li key={index}>
                            <button
                                onClick={() => {
                                                    setOpenList(false);
                                                    navigate(`/Summary?id=${movie.id}`);
                                                }}
                            >{movie.title}</button>
                    <button 
                        className="list__delete"
                        onClick={() => {
                        setMyList(myList.filter((_, i) => i !== index));
                        }}
                    >
                        <FontAwesomeIcon icon={faX} />
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default List
