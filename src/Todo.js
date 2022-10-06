import React from 'react'

const todo = ({todo, toggleTodo}) => {

    const handleTodoClick = () =>{
        toggleTodo(todo.id);
    }
    return (
        <div>
            <label>
                <input 
                    type="checkbox"
                    checked={todo.completed} 
                    readOnly 
                    onChange={handleTodoClick}
                    />
            </label>
            {todo.name}
        </div>
    )
    
};

export default todo;