import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

const Search = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="Search" element={<Search/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default Search