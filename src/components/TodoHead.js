import React, {useState} from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import Dialog from './Dialog';
import { darken, lighten } from 'polished';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    h1{
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day{
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left{
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  height: 2.25rem;
  font-size: 1rem;

  margin-top: 20px;
  
  background: #228be6;
  &:hover {
    background: ${lighten(0.1, '#228be6')};
  }
  &:active {
    background: ${darken(0.1, '#228be6')};
  }
`;

function TodoHead({title}){
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);
    
    const [dialog, setDialog] = useState(false);

    const onClick = () => {
        setDialog(true);
    }
    const onConfirm = () => {
        console.log('확인');
        setDialog(false);
    }

    return(
        <TodoHeadBlock>
            <h1>{title}</h1>
            <StyledButton onClick={onClick}>클리어한 목록보기</StyledButton>
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
            <Dialog
                title="클리어한 일정확인"
                onConfirm={onConfirm}
                visible={dialog}
            > 데이터입니다.</Dialog>
        </TodoHeadBlock>
    )
}

export default TodoHead;