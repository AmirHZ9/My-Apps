import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import  "../Styles/todo.css"



const Todo = ({text,todo , todos , setTodo}) => {
  
  
    const checkhandler = () => {
     setTodo(todos.map(item => {
          if(item.id === todo.id){
              return{
                  ...item, completed: !item.completed

              }
          }
          return item;
     }))
    }
    const delethandler = () =>{
        setTodo(todos.filter(item => item.id !== todo.id))
        console.log(todos)
    
    }
    

    return (
        <div className='todos'>
            <p className={`${todo.completed ? "completed" : ""}`}>{text}</p>
            <button className='check' onClick={checkhandler}><i className="fa fa-check "></i></button>
            <button className='times' onClick={delethandler}><i className="fa fa-times times"></i></button>
           
        </div>
    );
};

export default Todo;