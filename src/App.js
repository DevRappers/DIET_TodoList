import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import person from './img/person.png';
import { TodoProvider } from './TodoContext';

// GlobalStyle지정 배경색
const GlobalStyle = createGlobalStyle`
  body{
    background: #ffe3e3;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle/>
      <div>
      <img src={person} style={{width:'200px',height: '250px', marginLeft: '200px', marginTop:'200px'}} alt='사람'/>
      <span>이재준님</span>
      <span>66kg</span>
        <TodoTemplate>
          <TodoHead title='식단관리'/>
          <TodoList/>
          <TodoCreate/>
        </TodoTemplate>
        <TodoTemplate>
          <TodoHead title='운동관리'/>
          <TodoList/>
          <TodoCreate/>
        </TodoTemplate>
      </div>
    </TodoProvider>
  );
}

export default App;
