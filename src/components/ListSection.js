import React from 'react'
import "./ListSection.css"
function ListSection({Icon,title,selected}) {
  return (
    <div className='ListSection__container'>
    <div className={`ListSection ${selected && "ListSection__active"}`}>
      <Icon/>
      <p>{title}</p>
    </div>
    <span></span>
    </div>
  )
}

export default ListSection
