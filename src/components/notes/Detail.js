import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Redirect } from 'react-router-dom';

import '../../form.css';

import { base_url } from "./urls.js";

const host = base_url


function ViewNote(props) {

	const [title, setTitle] = useState("")
	const [body, setBody] = useState("")
	const [created, setCreated] = useState()
	let params = useParams();

	let date = new Date(created)

	useEffect(() => {
		axios.get(`${host}/api/notes/${params.noteId}`)
		.then(({ data }) => {
			setTitle(data.title)
			setBody(data.body)
			setCreated(data.created)
		})
	}, [])

  return (
      <div className="testbox">
	      <form>
	      <h2 style={{color: "red"}}>{title} <small>{date.getDate() + "/" + date.getMonth() + "/" + date.getYear()}</small></h2>

	      <div className="item">{body}</div>
	      </form>
	      
    </div>
  );
}

export default ViewNote;
