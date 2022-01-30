import React, {useState} from "react";
import TodoForm from "./TodoForm";
import TodoNode from "./TodoNode";

function App() {
const [notes, setNotes] = useState([])

const addNote = (addNotes) =>{

  const newItem = {
    id: Math.random().toString(36).substring(2,9),
    task: addNotes,
    complete: false}
  setNotes([...notes, newItem])
  console.log(notes)

}

const complFlag = (id) =>{

  console.log(id)
  setNotes([...notes.map((element) => element.id === id ? {...element, complete: !element.complete} : {...element})])
}

const deleteNote = (id) =>{
     setNotes([...notes.filter((element)=>element.id !==id)])
}


  return (
    <div className="App">
      <div className="taskList">Список задач</div> 

      <TodoForm  addNote={addNote}/> 

 
  {notes.map((element) => {
  return <TodoNode key={element.id}  element={element} complFlag={complFlag} deleteNote={deleteNote}/>
  // <p key={index}>{element}</p>;
})}
   
    
    </div>
  );
}

export default App;
