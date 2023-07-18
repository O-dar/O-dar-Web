import React, { useState } from "react";
import styled,{css}  from "styled-components";

const Container = styled.div`
display: flex;
margin: 0 auto;
`;

// Texts 컴포넌트 
const StyledTexts = styled.span`
    display: flex;
    box-sizing: border-box;
    position: absolute; 
    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-weight: 400;
    line-height: 16.8px;
    color: #000000;
    white-space: pre-line;
    ${props =>
        props.fontsize &&
        css`
          font-size: ${props.fontsize}px;
        `}
    ${props =>
        props.width &&
        css`
          width: ${props.width}px;
        `}
     ${props =>
        props.height &&
        css`
        height: ${props.height}px;
        `}
     ${props =>
        props.top &&
        css`
        top: ${props.top}px;
        `}
     ${props =>
        props.left &&
        css`
        left: ${props.left}px;
        `}
 
  @media all and (min-width: 1024px){	
  position: relative; 
  width: 100%;
  max-width:150px;
  height: 20px;
  margin-left:auto;
  margin-right:10px;
  top:-250px;
  left:-130px;
  font-size:20px;
  }

        
`;

function Texts({fontsize,width, height, top, left, children}) {
    return (
        <StyledTexts fontsize={fontsize} width={width} height={height} top={top} left={left}>
            {children}
        </StyledTexts>
    );
}


//AgreeButton 컴퍼넌트

const ButtonContainer = styled.div`
  display: inline-block;
  position: absolute;
  width: 50.42px;
  height: 25px;
  left: 265px;
  border: 5px solid #A2C08A;
  border-radius: 50px;
  background-color: transparent;
  cursor: pointer;
  ${props =>
    props.top &&
    css`
    top: ${props.top}px;
    `}

  @media all and (min-width: 1024px) {
    position: relative;
    max-width: 67px;
    max-height: 33px;
    top: -255px;
    left:120px;
    margin-left:10px;
    margin-right:auto;
  }
`;

const Button = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => props.clicked ? "35px" : "15px"};
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #A2C08A;
  transition: left 0.3s ease-in-out;
`;

function AgreeButton({top}) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <ButtonContainer top={top} onClick={handleClick}>
      <Button clicked={clicked} />
    </ButtonContainer>
  );
}

function Container4() {
  return (
    <Container>
    <Texts fontsize={16} width={119} height={20} top={524} left={64} >
      채용정보 알림 동의</Texts>
    <AgreeButton top={521}></AgreeButton>
    </Container>
  );
}

export default Container4;