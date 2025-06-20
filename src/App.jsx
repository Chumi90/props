import './App.css'
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);
  const [newTasks, setNewTasks] = useState('');

  const addTask = () =>{
    if (newTasks.trim()!==""){
      setTasks([...tasks,{
        id:(tasks.length+1),
        text:newTasks,
        completed:false
        }
      ]);
    }
    setNewTasks('');
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTask=(taskId)=>{
    setTasks(tasks.map(tasks=>{
      tasks.id === taskId? {...tasks, completed: !tasks.completed}: tasks
  }))

  }
 

  return (
    <>
    <h1>Listado de Tareas</h1>
    <form onSubmit={(e)=>{
        e.preventDefault();
        addTask();
        }
      }>
      <input 
        type="text" 
        placeholder="introduce task"
        value={newTasks}
        onChange={(e)=> setNewTasks(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>

    <div>
        <ol>
          {tasks.map((task)=>(
              <li 
                key={task.id} 
                >
                <p 
                  style={{textDecoration:task.completed ? 'line-through' : 'none'}} 
                  onClick={() =>toggleTask(task.id)}>
                  {task.text}
                </p>
                <button 
                  onClick={() => deleteTask(task.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
        </ol> 
    </div>

    </>
  );
};

export default App;
