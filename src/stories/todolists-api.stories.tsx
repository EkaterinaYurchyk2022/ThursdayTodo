import React, {useEffect, useState} from 'react'
import {TodolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
       TodolistAPI.getTodos()
            .then((res)=>{
                setState(res.data)
            })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        TodolistAPI.createTodo("WWWW")
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        TodolistAPI.deleteTodo('erccx')
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        TodolistAPI.updateTodoTitle('uhyuf', 'TRDFGJB')
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

