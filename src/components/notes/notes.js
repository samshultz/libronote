import { Link } from "react-router-dom";


function Notes(props) {

	
  return props.notes ? (
    <div className="">
      <h2>All Notes</h2>
		<div className="table-wrapper">
		    <table className="fl-table">
		        <thead>
			        <tr>
			            <th>S/N</th>
			            <th>Title</th>
			            <th>body</th>
			            <th>Created</th>
			            <th></th>
			        </tr>
		        </thead>
		        <tbody>
		        	{
		        		props.notes.map((note, id) => (
		        			<tr key={note.id}>
		        				<td>{id + 1}</td>
				            <td><Link to={`/notes/${note.id}`}>{note.title}</Link></td>
				            <td>{note.body}</td>
				            <td>{new Date(note.created).getDate() + "/" + new Date(note.created).getMonth() + "/" + new Date(note.created).getYear()}</td>
				            <td><Link exact to={`/notes/update/${note.id}`}>Edit</Link></td>
		        			</tr>
		        		))
		        	}
		       </tbody>
		    </table>
		</div>
    </div>
  ) : (
  	<div>Loading...</div>
  );
}

export default Notes;
