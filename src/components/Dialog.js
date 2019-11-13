import React, {useState, useEffect} from 'react';
import styled, { keyframes, css} from 'styled-components';
import { darken, lighten } from 'polished';

const fadeIn = keyframes`
    from{
        opacity: 0
    }
    to {
        opacity: 1
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1
    }
    to {
        opacity: 0
    }
`;

const slideUp = keyframes`
    from{
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`;

const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
    z-index: 6;

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;

    ${props =>
        props.disapper &&
        css`
            animation-name: ${fadeOut};
        `
    }
`;

const DialgBlock = styled.div`
    width: 720px;
    padding: 1.5rem;
    background: white;
    border-radius: 2px;
    h3 {
        margin: 0;
        font-size: 1.5rem;
    }
    p {
        font-size: 1.125rem;
    }

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;

    ${props =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;
const ButtonGroup = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
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
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2.25rem;
  font-size: 1rem;
  
  background: #f06595;
  &:hover {
    background: ${lighten(0.1, '#f06595')};
  }
  &:active {
    background: ${darken(0.1, '#f06595')};
  }
`;

function Dialog({ title, children, onConfirm, visible})
{
    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(visible);

    useEffect(() => {
        // visible 값이ㅣ true -> false 가 되는 것을 감지 
        if(localVisible && !visible){
            setAnimate(true);
            setTimeout(() => setAnimate(false), 250);
        }
        setLocalVisible(visible);
    }, [localVisible, visible]);

    if (!animate && !localVisible) return null;

    return(
        <DarkBackground disappear={!visible}>
            <DialgBlock disappear={!visible}>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <StyledButton onClick={onConfirm}>확인</StyledButton>
                </ButtonGroup>
            </DialgBlock>
        </DarkBackground>
    )
}

export default Dialog;