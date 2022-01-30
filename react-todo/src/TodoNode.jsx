import React from 'react';

const TodoNode = ({element, complFlag, deleteNote}) => {

    console.log(element.complete);
    
    

    return (
        <div className="TodoNote">
        <div 
            key={element.id}
            className={element.complete ? "noteText through" : "noteText"} 
            onClick={()=>{complFlag(element.id)}}
        > {element.task} 
        </div> 
        <div className="TodoDelete" onClick={()=>{deleteNote(element.id)}} >X</div>
        </div>
    );
};

export default TodoNode;