"use client"
import { useState,useEffect } from "react"
export default function Todo(){
    const [todo , setTodo] =  useState<{ title?: string }>({});
    useEffect( ()=>{
        const feachData =  async () => {
            const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const result = await response.json()
            setTodo(result);
        };
        feachData();
    },[])
    return(
        <>
            <h1> {todo.title}</h1>
        </>
    )
}