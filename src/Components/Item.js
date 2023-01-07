import React from 'react'

export const Item = ({Note,onDelete}) => {
  return(
    <>
    <div>
       <h4>{Note.title}</h4>
         <p>{Note.description}</p>
    <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(Note)}}>Delete</button>
    </div>
    <hr/>
    </>
  )

}
