import React, {useState} from "react";
const TodoForm = ({addNote}) => {
    const sumbitValue = (e) =>{ 
        e.preventDefault()
        if (note != ''){
        addNote(note)
        setNote('')
        }
    } 
        const[note, setNote] = useState('')

       
        
    return (
        <form className="mainForm" onSubmit={sumbitValue}>
            <input type="text"
            value={note}
            onChange={(event) => setNote(event.target.value)} 
            
            />
            <button>Добавить задачу</button>
            
        
        </form>
        
    );
};

export default TodoForm;