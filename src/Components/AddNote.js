import React, { useState } from 'react'

export const AddNote = ({addNote}) => {

    const [title, setTitle] = useState("");
    const [NoteText, setNoteText] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !NoteText) {
            alert("Title or Description cannot be blank")
        }
        else{
            addNote(title, NoteText);
            setTitle("");
            setNoteText("");

        }

       
    }

    return (
        <div className="container my-3">
            <h3>Add Notes</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="NoteText" className="form-label">NoteText</label>
                    <input type="text" value={NoteText} onChange={(e) => setNoteText(e.target.value)} className="form-control" id="NoteText" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Note</button>
            </form>
        </div>
    )
}
