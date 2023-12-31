import '../../App';
import React ,{ useState } from 'react';
import Input_pwcheck from './Input/Input_pwcheck';
import Input_pw from './Input/Input_pw';
import Input_id from './Input/Input_id';
import Text from './Text';
import ProgressBar from './ProgressBar';
import InputLongButton from './Input/InputLongButton';
import BigText from './BigText';
import { useNavigate } from 'react-router-dom';


function Join(){
    
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validPasswordCheck, setValidPasswordCheck] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordcheck, setPasswordCheck] = useState("");
    const [id,setId] = useState("");
    const [passWd,setPassWd] = useState("");
    

    const handleEmailChange = (isValid,email) => {
      setValidEmail(isValid);
      setId(email);

    };
  
    const handlePasswordChange = ({ password, isValidPassword }) => {
      setValidPassword(isValidPassword);
      setPassword(password);
    };
  
    const handlePasswordCheckChange = ({ passwordcheck, isValidPasswordCheck }) => {
      setPasswordCheck(passwordcheck);
  
      // 비밀번호와 비밀번호 확인 값이 같을 경우에만 setValidPasswordCheck 호출
      if (passwordcheck === password) {
        setValidPasswordCheck(isValidPasswordCheck);
        setPassWd(passwordcheck);
      }
      else
       setValidPasswordCheck(false);

    };
        /*클릭시 라우팅 + input 값들 전달하기*/
        const navigate = useNavigate();
        const routing = () =>{
          navigate('/join1',{
            state:{
              id : id,
              passWd : passWd
            }
          });
        }
    return(
        <>
        <div>

        <ProgressBar validEmail={validEmail} validPassword={validPassword} validPasswordCheck={validPasswordCheck} />

            <div className="join__box"> 
                <BigText fontSize="32px">회원가입</BigText>
            </div>
            
            <div className="id__box"><Text width="63px">아이디</Text></div>
            <Input_id type="email" placeholder=" 아이디를 입력해주세요." onChange={handleEmailChange} />

            <div className="pw__box"><Text width="83px">비밀번호</Text></div>
            <Input_pw type="password" placeholder=" 비밀번호를 입력해주세요."onChange={handlePasswordChange} />


            <div className="pwcheck__box"><Text width="130px">비밀번호 확인</Text></div>
            <Input_pwcheck type="password" placeholder=" 비밀번호를 확인해주세요." onChange={handlePasswordCheckChange} />

        <InputLongButton validEmail={validEmail}
          validPassword={validPassword}
          validPasswordCheck={validPasswordCheck}
          onClick={routing}
          />
        </div>
        </>  
    )
}

export default Join