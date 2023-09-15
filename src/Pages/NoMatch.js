import React from 'react'
import { NavLink } from 'react-router-dom/dist'

const NoMatch = () => {
  return (
    <div>
      Nothing to see here lol!
      <div>
        <NavLink to="/"> kindly go back please</NavLink>
      </div>
    </div>
    
  )
}

export default NoMatch
