import React, { Component } from 'react' ;
 
 const ToDoForm = ({ onChange, draft, onSubmit }) => (
     <div>
     <input type='text' onChange={onChange} value={draft}/>
        <button onClick={onSubmit}> Add Task</button>
     </div>
 )
 export default ToDoForm;