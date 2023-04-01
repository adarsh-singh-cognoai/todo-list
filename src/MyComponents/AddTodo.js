import React, { useState } from 'react'


const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
       e.preventDefault();
       if(!title || !desc){
        alert("Title or Description can not be empty")
        return;
       }
       props.addTodo(title, desc);
       setDesc("");
       setTitle("");
    }
    return (
        <div className='container'>
            <h3 className='my-3'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=> {setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc}  onChange={(e)=> {setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-success btn-sm">Add ToDo</button>
            </form>
            <h3 className=' my-3'>Todos list</h3>
        </div>
    )
}

export default AddTodo
