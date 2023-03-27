import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StButton, StFont, StSmfont } from "./Singstyled";
import CheckboxLabels from "./CheckboxLabels";
import instance from "../../axios/api";
import { ESInput, useInput } from "../../hook/useInput";
import { Navigate } from "react-router-dom";
// import { useMutation } from 'react-query';
// import useNavigate from "../../hook/useNavigate";
// =============== EH =================
import { Helmet } from "react-helmet";
// =============== EH =================

function Signup() {
  // const {navigateTo} = useNavigate();
  // const isLogin = useSelector(state => state.login);

  const navi = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    nick: "",
  });

  const chgInputHandler = (e) => {
    const { value, name } = e.target;
    setUser((old) => {
      return { ...old, [name]: value };
    });
  };

  const submitBtnHandler = (e) => {
    e.preventDefault();
    navi("/signup2");
    // instance.post("/singup",user)
  };

  //이 부분이 처리되서 먼저 입력안했는데 넘어감
  // const onNavigate = () => {
  //   navigateTo('/signup2')
  // }

  // const signupMutation = useMutation(
  //   data => axios.post('/',data),
  //   {

  //   },
  //   {

  //   }
  // )

  return (
    <>
      //========= EH =============
      <Helmet>
        <title>Login - Netflix</title>
      </Helmet>
      //========= EH =============
      <StForm onSubmit={submitBtnHandler}>
        <div>
          <StSmfont>1/3단계</StSmfont>
          <br />
          <StFont>
            <h3>비밀번호를 설정해 멤버십을 시작하세요.</h3>
            <p>몇 단계만 더 거치면 넷플릭스 가입 완료!</p>
            <p>복잡한 단계는 모두 없앴습니다.</p>
          </StFont>
          <br />
          <ESInput
            value={user.email}
            name="email"
            onChange={chgInputHandler}
            placeholder="이메일 주소를 추가하세요"
            maxLength="15"
            required
          />
          <br />
          <ESInput
            value={user.password}
            onChange={chgInputHandler}
            name="password"
            placeholder="비밀번호를 추가하세요(8 이상 20 미만)"
            maxLength="20"
            required
          />
          <ESInput
            value={user.nick}
            onChange={chgInputHandler}
            name="nick"
            placeholder="닉네임을 추가하세요"
            maxLength="10"
            required
          />
          <CheckboxLabels />
          <br />
          <StButton>동의하고 계속</StButton>
        </div>
      </StForm>
    </>
  );
}

export default Signup;

//전체
const StForm = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const StInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background-color: #f3f3f3;
  font-size: 16px;
  font-weight: 600;
`;
