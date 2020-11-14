import React, { useState, useEffect } from "react";
import axios from "axios";

import '../../form.css';


function Form(props) {

	const [title, setTitle] = useState("")
	const [body, setBody] = useState("")

	const addNote = (e) => {
		e.preventDefault()
		let data = {title, body}

		props.addNote(data)
		setTitle("")
		setBody("")

	}

  return (
      <div className="testbox">
	      <h2>Add Note</h2>
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
	          <button type="submit" href="/" onClick={addNote}>Create</button>
	        </div>
      </form>
    </div>
  );
}

export default Form;
