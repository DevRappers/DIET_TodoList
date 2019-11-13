import React, { useReducer, createContext, useContext} from 'react';

const initialUser = {
    name: 'DevRappers',
    kg : 0
};

function userReducer(state, action) {
    switch(action.type){
        case 'CREATE':
            return {
                ...state,
                name: action.name,
                kg : action.kg
            };
        case 'DIET':
            localStorage.setItem('kg', state.kg - 0.1);
            return {
                ...state,
                kg: state.kg - 0.1
            }
        default:
                throw new Error(`Unhandled action type : ${action.type}`);
    }
}

const UserStateContext = createContext();
const UserDispatchContext = createContext();


export function UserProvider({children})
{
    const [state, dispatch] = useReducer(userReducer, initialUser);

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
}

export function useUserState(){
    const context = useContext(UserStateContext);
    if(!context){
        throw new Error('Cannot find UserProvider');
    }
    return context;
}

export function useUserDispatch(){
    const context = useContext(UserDispatchContext);
    if(!context){
        throw new Error('Cannot find UserProvider');
    }
    return context;
}