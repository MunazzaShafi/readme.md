import {configureStore} from '@reduxjs/toolkit'
import todoReducers from '../features/TodoSlice'

export  const Store =configureStore({
    reducer:todoReducers
})