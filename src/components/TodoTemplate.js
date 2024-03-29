import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 668px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;

  float:left;

  &+&{
      margin-left: 2rem;
  }
`;

function TodoTemplate({ children }){
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate