import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '14792c9c-30d1-45c9-8975-ae0b8af25491'
    }
})

export const TodolistAPI = {
    getTodos: () => {
        return instance.get<Array<TodoType>>('todo-lists')
    },
    createTodo: (title: string) => {
        return instance.post<BaseResponseType<{ item: TodoType }>>('todo-lists', {title: "New Todolist"})
    },
    deleteTodo: (todolistId: string) => {
        return instance.delete<BaseResponseType>(`todo-lists/${todolistId}`,)
    },
    updateTodoTitle: (todolistId: string, title: string) => {
        return instance.put<BaseResponseType>(`todo-lists/${todolistId}`, {title: "Another one"})
    }
}

// Types
export type BaseResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    fieldsError: string[]
    data: T
}

export type TodoType = {
    id: string
    addedDate: string
    order: number
    title: string
}
