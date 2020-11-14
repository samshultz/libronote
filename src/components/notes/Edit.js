import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Redirect } from 'react-router-dom';

import '../../form.css';

import { base_url } from "./urls.js";

const host = base_url

function UpdateNote(props) {

	const [title, setTitle] = useState("")
	const [body, setBody] = useState("")
	const [redirect, setRedirect] = useState(false)
	let params = useParams();

	useEffect(() => {
		axios.get(`${host}/api/notes/${params.noteId}`)
		.then(({ data }) => {
			setTitle(data.title)
			setBody(data.body)
		})
	}, [])


	const updateNote = (e) => {
		e.preventDefault()
		console.log(props)
		let data = {title, body}

		axios.put(`http://localhost:8000/api/notes/${params.noteId}/`, data)
		setRedirect(true)

	}

  return redirect ? (<Redirect exact to="/" />): (
      <div className="testbox">
	      <h2>Update Note</h2>
	      <form action="">
	        <div className="item">
	          <p>Title</p>
	          <input type="text" name="title" value={title} onChange={({ target }) => setTitle(target.value)} />
	        </div>
	        <div className="item">
	          <p>Content</p>
	          <textarea rows="3" name="body" required value={body} onChange={({ target }) => setBody(target.value)}></textarea>
	        </div>
	        <div className="btn-block">

	          <button type="submit" href="/" onClick={updateNote}>Update</button>
	        </div>
      </form>
    </div>
  );
}

export default UpdateNote;
