import React, { useState } from "react";
import styled from "styled-components";
import { PiEyeClosed, PiEye } from "react-icons/pi"; 

const StyledInput = styled.input`
    display: flex;
    box-sizing: border-box;
    position: relative; 
    border-radius: 15px;
    font-family: "Pretendard";
    font-size: 24px;
    font-weight: 800;
    border: 1.5px solid #5B8E31;
    width: 290px;
    height: 50px;
    top: -285px;
    margin: 0px auto;
    text-indent: 0.5em;

    ::placeholder {
        font-family: "Pretendard";
        font-size: 21px; 
        color: #D9D9D9; 
        font-weight: 800;
    }
    
    @media all and (min-width: 1024px){	
        position: relative; 
        width: 360px;
        height: 50px;
        margin: 0px auto;
        top: -130px;
        left:0px;
        }
      
`;

const IconWrapper = styled.div`
    position: relative; 
    width: 24px;
    height: 24px;
    top: -320px;
    left: 120px;
    cursor: pointer;
    margin: 0px auto;

    @media all and (min-width: 1024px){	
        position: relative; 
        margin: 0px auto;
        top: -167px;
        left:150px;
        }
`;

const Icon = styled.div`
    width: 24px;
    height: 24px;
`;
// 대소문자 유효성 검사 함수
function validateUpperCase(str) {
    return /[A-Z]/.test(str);
  }
  
  // 숫자 유효성 검사 함수
  function validateNumber(str) {
    return /[0-9]/.test(str);
  }
  
  // 특수문자 유효성 검사 함수
  function validateSpecialCharacter(str) {
    return /[!@#$%^&*(),.?":{}|<>]/.test(str);
  }

function Withdrawal_Input_Pw(props) {
  const { onChange, ...otherProps } = props; // props에서 onChange를 추출하여 나머지 props를 otherProps로 받음

  const [isPasswordVisible, setPasswordVisible] = useState(false); // 비밀번호 숨김/보임 상태

  const [validUpperCase, setValidUpperCase] = useState(false); // 대소문자 유효성 검사 결과
  const [validNumber, setValidNumber] = useState(false); // 숫자 유효성 검사 결과
  const [validSpecialCharacter, setValidSpecialCharacter] = useState(false); // 특수문자 유효성 검사 결과
  const [password, setPassword] = useState(""); // password 상태 추가

    const handleClick = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const handleInputChange = (event) => {
    const password = event.target.value;
    const isValid1 =validateUpperCase(password);
    const isValid2 =validateNumber(password);
    const isValid3 =validateSpecialCharacter(password);

    const isValidPassword = isValid1 && isValid2 && isValid3;

    setValidUpperCase(isValid1);
    setValidNumber(isValid2);
    setValidSpecialCharacter(isValid3);
    setPassword(password); // email 상태 업데이트
  
    // 비밀번호와 유효성 검사 결과를 객체로 묶어서 한 번에 전달
    onChange(isValidPassword, password);

  };
  
    return (
      <>
              <StyledInput {...props} type={isPasswordVisible ? "text" : "password"} onChange={handleInputChange} />
            <IconWrapper onClick={handleClick}>
                <Icon>{isPasswordVisible ? <PiEye size={24} /> : <PiEyeClosed size={24} />}</Icon>
            </IconWrapper>
            </>
    );
}

export default Withdrawal_Input_Pw;
