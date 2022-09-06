import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreatePost(props) {

    let navigate = useNavigate(); 

    if (props.loggedIn === false){
        props.flashMessage('You need to be logged in to create a post', 'danger')
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);

        let title = e.target.title.value;
        let body = e.target.body.value;

        console.log(title)
        console.log(body)

        let token = localStorage.getItem('token')
        let expiration = localStorage.getItem('expiration')
        console.log(token)
        console.log(expiration)

        let myHeaders = new Headers();
        myHeaders.append('Authorization', "Bearer " + token)
        myHeaders.append('Content-type', 'application/json');

        let formData = JSON.stringify({
            title: e.target.title.value,
            body: e.target.body.value
        })

        fetch('http://localhost:5000/api/posts', {
            method: 'POST',
            headers: myHeaders,
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.error){
                    console.error(data.error)
                } else {
                    props.flashMessage('You have created a post!', 'success')
                    navigate('/ViewBlog',{state:{title: title, body: body}})
                    
                }
            })

    }

    return (
        <>
            <h4 className="text-center">Create Post</h4>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" placeholder='Enter Title' name='title' />
                    <label htmlFor="content">Body</label>
                    <input type="text" className="form-control" placeholder='Body goes here' name="body" />
                    <input type="submit" className="btn btn-primary w-100 mt-3" value="Create Post"/>
                </div>
            </form>
        </>
  )
}