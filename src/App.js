import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';
import User from './components/User';
import { UserProvider } from './UserContext';

// GlobalStyle지정 배경색
const GlobalStyle = createGlobalStyle`
  body{
    background: #ffe3e3;
  }
`;

function App() {
  return (
    <UserProvider>
      <GlobalStyle/>
      <TodoProvider menu="food">
        <TodoTemplate>
          <TodoHead title='오늘의 식단'/>
          <TodoList/>
          <TodoCreate menu='food'/>
        </TodoTemplate>
      </TodoProvider>
      <TodoProvider>
        <TodoTemplate>
          <TodoHead title='오늘의 운동'/>
          <TodoList/>
          <TodoCreate/>
        </TodoTemplate>
      </TodoProvider>
      <User/>
    </UserProvider>
  );
}

export default App;
