import React from 'react'
import { Item } from './Item'

export const Itemlist = (props) => {
  const myStyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className='my-3'>Notes List</h3>
      {props.Notes.length === 0? "No Notes to display":
        props.Notes.map((Note) => {
          return <Item Note={Note} key={Note.sno} onDelete={props.onDelete}/>
        })}
    </div>
  )
}
