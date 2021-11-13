import React,{useEffect, useState} from 'react';
import {v4} from "uuid"
import Todo from './Todo';
import  styles from "../Styles/todo.module.css"
const TodoApp = () => {
    const [data, setData] = useState("" )
    const [todos , setTodo] = useState([])
    const [status, setstatus]=useState('All')
    const [filter , setFilter]=useState([])
    const [error, setError] = useState('')

   useEffect(() => {
       filterhandler()
   },[status, todos])


    const changehandler =  (event) => {
        const text = event.target.value
        setData(text)
    }


    const addtodo = (event)  =>{
       if(data){

           setTodo([...todos,{
               text:data, completed:false, id:v4() 
           }])
           setData('')
           setError("")
       }else{
           setError('* Please enter something')
       }
    }


    const statushandler= event => {
        setstatus(event.target.value)
    }


    const filterhandler = (event) =>{
        switch(status){
            case "completed":
                setFilter(todos.filter(todos => todos.completed === true))
                break;
            case "uncompleted":
                setFilter(todos.filter(todos => todos.completed === false))
                break;
                default:
                    setFilter(todos)
                    break
                
            
        }

    }
    return (
        <div>
            <div className={styles.todo_container}>
            <div className={styles.todo_main}>
            <input type="text" value={data} onChange={changehandler}/>
            <button onClick={addtodo}>Add</button>
            <select name="todo" className={styles.todoselect} onChange={statushandler}>
                <option value="All">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            </div>
            
           <h4>{error}</h4> 

        </div>
                {
                    filter.map(todo =><Todo 
                        key={todo.id}
                        text={todo.text}
                        todo={todo}
                        todos={todos}
                        setTodo={setTodo}
                        
                        /> )
                    }
   
           
        </div>
    );
};

export default TodoApp;
