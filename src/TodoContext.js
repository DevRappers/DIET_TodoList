import React, { useReducer, createContext, useContext, useRef } from 'react';

// 운동 기본값
const initialMotions = [
    {
        id: 1,
        text: '데드리프트 20회',
        done: false
    },
    {
        id: 2,
        text: '줄넘기 100회',
        done: false
    },
    {
        id: 3,
        text: '런닝머신 30분',
        done: false
    },
    {
        id: 4,
        text: '스쿼드 20회',
        done: false
    }
];

// 식단 기본값
const initialFoods = [
    {
        id: 1,
        text: '바나나 한개',
        done: false
    },
    {
        id: 2,
        text: '고구마 1개',
        done: false
    },
    {
        id: 3,
        text: '계란 한개',
        done: false
    },
    {
        id: 4,
        text: '미숫가루 한잔',
        done: false
    }
];

function todoReducer(state, action) {
    switch(action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? {...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
                return state.filter(todo => todo.id !== action.id);
        default:
                throw new Error(`Unhandled action type : ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children, menu})
{
    const m = menu === 'food' ? true : false;

    const [state, dispatch] = useReducer(todoReducer, 
        m ? initialFoods : initialMotions
    );

    const foodNextId = useRef(5);
    const motionNextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={m ? foodNextId : motionNextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState(){
    const context = useContext(TodoStateContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId(){
    const context = useContext(TodoNextIdContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}