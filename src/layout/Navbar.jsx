import React, { useContext } from 'react'

import { linkContext } from '../util/context'

const Navbar = () => {
    const {link, setLink, leagueName, setLeagueName } = useContext(linkContext)
  return (
    <div className='nav-bar'>
        <button onClick={(e) => {
            
            setLink('football/nfl')
            setLeagueName('NFL')
        }}>NFL</button>
        <button  onClick={(e) => {
            
            setLink('basketball/nba')
            setLeagueName('NBA')
            
        }}>NBA</button>
        <button onClick={(e) => {
            setLink('baseball/mlb')
            setLeagueName('MLB')
        }}>MLB</button>
        <button onClick={(e) => {
            setLink('hockey/nhl')
            setLeagueName('NHL')
        }}>NHL</button>

    </div>
  )
}

export default Navbar