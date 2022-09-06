import React from 'react'
import { useLocation } from 'react-router-dom';



export default function ViewBlog() {
  const { state } = useLocation();
  return (
    <>
    <div className="card">
          <div className="card-body">
          <h5 className="card-title">{state.title}</h5>
          <p className="card-text">{state.body}</p>
    </div>
 </div>
 </>
  )
}
