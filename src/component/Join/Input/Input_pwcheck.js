import React, { useState } from "react";
import styled from "styled-components";
import { PiEyeClosed,PiEye } from "react-icons/pi"; 

const StyledInput = styled.input`
    display: flex;
    box-sizing: border-box;
    position: absolute; 
    border-radius: 15px;
    font-size: 24px;
    border: 1.5px solid #5B8E31;
    width: 335px;
    height: 50px;
    top: 592px;
    left: 33px;
    ::placeholder {
      font-family: "Pretendard";
      font-size: 24px; 
      color: #D9D9D9; 
      font-weight: 800;
    }
    @media all and (min-width: 1024px){	
        position: relative; 
        margin-right:auto;
        margin-left:auto;
        top:480px;
        left:0px;
        width:440px;
        }
`;
const IconWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    position: absolute; 
    width: 24px;
    height: 24px;
    top: 608px;
    left: 324px;
    cursor: pointer;
    @media all and (min-width: 1024px){	
        position: relative; 
        margin-right:auto;
        margin-left:auto;
        top:445px;
        left:200px;
        }
`;
function Input_pwcheck(props) {
  const [isPasswordVisible, setPasswordVisible] = useState(false); // 비밀번호 숨김/보임 상태

  const handleClick = () => {
      setPasswordVisible(!isPasswordVisible); };

return (
    <div style={{ position: "relative" }}>
        <StyledInput {...props} type={isPasswordVisible ? "text" : "password"} />
        <IconWrapper onClick={handleClick}>
            {isPasswordVisible ? <PiEye size={24}/> : <PiEyeClosed size={24}/>} 
        </IconWrapper>
    </div>
);
}

export default Input_pwcheck;
