import React, { useState, useEffect } from "react";
import axios from "axios";

import { Switch, Route } from 'react-router-dom';
import Form from "./form"
import UpdateNote from "./Edit"
import Notes from "./notes"

import { base_url } from "./urls.js";

const host = base_url

function Dashboard() {
	const [notes, setNotes] = useState();

	useEffect(() => {
		axios.get(`${host}/api/notes/`)
		.then(({ data }) => {
			setNotes(data)
		})
	}, [])

	const addNote = (data) => {

		axios.post(`${host}/api/notes/`, data)
		.then(({ data }) => {
			setNotes([
				...notes, 
				data
				])
		})
	}

	const updateNote = (data, noteId) => {
		axios.put(`${host}/api/notes/${noteId}/`, data)
		.then(({ data }) => {
			setNotes([
				...notes,
				data
				])
		})
	}

  return (
  	
    <div className="">
      <h1>Notes</h1>
      <Form addNote={addNote} />
      <Notes notes={notes}/>
    </div>

  );
}

export default Dashboard;
