import React from 'react'

const NavBarTabs = ({ tabs, handleSelectSection }) => (
  <ul>
  {
    Object.keys(tabs).map((key)=>{
      console.log(handleSelectSection)
      return (
          <li key={tabs[key]}>
            <button onClick={(e)=>{e.preventDefault(); handleSelectSection(tabs[key])}}>{key}</button>
          </li>
      )
    })
  }
  </ul>
)

export default NavBarTabs;