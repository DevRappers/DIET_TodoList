import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

// GlobalStyle지정 배경색
const GlobalStyle = createGlobalStyle`
  body{
    background: #ffe3e3;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <div>
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
    </>
  );
}

export default App;
