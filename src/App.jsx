import React from 'react'
import Home from './pages/Home'
import Search from './pages/Search'
import Summary from './pages/Summary'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import List from './components/List'

const App = () => {
  const [openList, setOpenList] = useState(false);
  const [myList, setMyList] = useState([]);


  return (

    <>
      <Routes>
        <Route path='/' exact element={<Home openList={openList} setOpenList={setOpenList} myList={myList} />} />
        <Route path='/Search' element={<Search openList={openList} setOpenList={setOpenList} myList={myList} />} />
        <Route path='/Summary' element={<Summary openList={openList} setOpenList={setOpenList} myList={myList} setMyList={setMyList} />} />
      </Routes>
      {openList? ( <div className="backdrop" onClick={() => setOpenList(false)}>
        <List 
          openList={openList} 
          setOpenList={setOpenList}
          myList={myList}
          setMyList={setMyList}
        />
      </div>
                  ) : null}
    </>
  )
}

export default App
