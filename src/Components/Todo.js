import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styles from "../Styles/todo.module.css"



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
        <div className={styles.todos}>
            <p className={todo.completed ? styles.completed : " "}>{text}</p>
            <button className={styles.check} onClick={checkhandler}><i className="fa fa-check "></i></button>
            <button className={styles.times} onClick={delethandler}><i className="fa fa-times times"></i></button>
           
        </div>
    );
};

export default Todo;