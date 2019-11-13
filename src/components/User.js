import React, {useEffect} from 'react';
import styled from 'styled-components';
import person from '../img/person.png';
import { useUserState, useUserDispatch } from '../UserContext';

const UserItem = styled.table`
    width: 200px;
    margin: auto;
    text-align: center;
`;

function User(){
    const dispatch = useUserDispatch();
    useEffect(() => {
        if(!localStorage.name){
            const inputName = prompt('이름을 입력하세요', ''); 
            const inputKg = prompt('몸무게를 입력해주세요.[숫자로 입력]', 0);
            alert(`환영합니다 ${inputName}님 다이어트 화이팅입니다!!!`);
            dispatch({
                type: 'CREATE',
                name: inputName,
                kg: inputKg
            });
            localStorage.setItem('name', inputName);
            localStorage.setItem('kg', inputKg);
        }
        else{
            const inputName = localStorage.name; 
            const inputKg = localStorage.kg;
            dispatch({
                type: 'CREATE',
                name: inputName,
                kg: inputKg
            });
        }
        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [dispatch]);

    const users = useUserState();
    const {name, kg} = users;
    return (
        <UserItem>
            <tbody>
                <tr>
                    <td>
                        <img 
                            src={person} 
                            style={{height: '250px', marginTop:'200px'}} 
                            alt='사람'
                        />
                    </td>
                </tr>
                <tr>
                    <td><h2>이름 : {name}</h2></td>
                </tr>
                <tr>
                    <td><h2>몸무게 : {Number.parseFloat(kg).toFixed(2)}kg</h2></td>
                </tr>
            </tbody>
        </UserItem>
    );
}

export default User;
