import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

export default function ViewPosts(props) {

const [blogs, setBlogs] = useState([]) 
useEffect (() =>{
    fetch("https://kekambas-blog.herokuapp.com/blog/posts")
    .then(response => response.json())
    .then(result => {setBlogs(result)});
    console.log(blogs)
}, [])  

console.log(blogs)
return (
    <>
       {blogs.map((blog,i)=><div key = {i} className="card">
          <div className="card-body">
          <h5 className="card-title">{blog['title']}</h5>
          <p className="card-text">{blog['content']}</p>
    </div>
 </div>
)}
    </>
)
}