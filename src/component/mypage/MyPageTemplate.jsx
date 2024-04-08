import React, { useState, useMemo } from "react";
import styled from "styled-components";
import MenuBar from "../common/MenuBar.jsx";
import AlertBar from "../common/Alert.jsx";
import Avatar from "../common/Avatar.jsx";
import chRoot from "../resource/avatar_default.png";
import logoRoot from "../resource/unisphere_logo.png";
import unisphereHand from "../resource/unisphere_logo_hand.png";
import MyGroupTable from "./MyGroupTable.jsx";

function IntroTemplate() {
  let isFirstLogin = true;
  const [showMyPage, setShowMyPage] = useState(true);
  const [buttonOneZIndex, setButtonOneZIndex] = useState(2); // 기본 버튼은 홈피 버튼
  const [buttonTwoZIndex, setButtonTwoZIndex] = useState(0);

  const columns = useMemo(
    () => [
      {
        accessor: "name",
        Header: "단체 이름",
      },
      {
        accessor: "approvedAt",
        Header: "단체 가입 날짜",
      },
      {
        accessor: "goPage",
        Header: "이동"
      },
      {
        accessor: "withdraw",
        Header: "탈퇴"
      },
    ],
    []
  );
  
  //목데이터
  const groupData = [
    {
      "groupId": 1,
      "name": "KOICA",
      "logoImageUrl": "example.com",
      "summary": "코이카는 멋진 단체에요.",
      "approvedAt": "2024-04-03T10:38:52.340Z" 
    },
    {
      "groupId": 2,
      "name": "KOICA",
      "logoImageUrl": "example.com",
      "summary": "코이카는 멋진 단체에요.",
      "approvedAt": "2024-04-03T10:38:52.340Z" 
    },
    {
      "groupId": 3,
      "name": "KOICA",
      "logoImageUrl": "example.com",
      "summary": "코이카는 멋진 단체에요.",
      "approvedAt": "2024-04-03T10:38:52.340Z" 
    },
  ];

  return (
    <HomepagePosition>
      <MenuBar />
      <AlertBar />
      <LogoPart>
        <text>마이페이지</text>
        <img src={unisphereHand} alt="UniSphereHand" />
      </LogoPart>
      <ButtonOne
        onClick={() => {
          setShowMyPage(true);
          setButtonOneZIndex(2);
          setButtonTwoZIndex(0);
        }}
        style={{
          zIndex: buttonOneZIndex,
        }}
      >
        내 정보
      </ButtonOne>
      <ButtonTwo
        onClick={() => {
          setShowMyPage(false);
          setButtonOneZIndex(0);
          setButtonTwoZIndex(2);
        }}
        style={{
          zIndex: buttonTwoZIndex,
        }}
      >
        아바타 설정
      </ButtonTwo>
      {showMyPage && (
        <WhiteBox>
          <MyPageContainer>
            <AvatarBox>
              <BubblePart>
                {isFirstLogin ? <text>자기소개를 작성해주세요!</text> : null}
                <BubbleBubble></BubbleBubble>
              </BubblePart>
              {isFirstLogin ? (
                <Avatar
                  name=" "
                  src={chRoot}
                  width="120vw"
                  marginLeft="30px"
                  marginTop="35px"
                />
              ) : null}
              <AvatarChangeButton>아바타 수정</AvatarChangeButton>
            </AvatarBox>
            <MyInfoContainer>
              <MyInfoItem>
                <MyText title>이름 : </MyText>
                {isFirstLogin ? <MyText>이름을 정해주세요!</MyText> : null}
              </MyInfoItem>
              <MyInfoItem>
                <MyText title>자기소개 : </MyText>
                {isFirstLogin ? (
                  <MyText>자기소개를 작성해주세요!</MyText>
                ) : null}
              </MyInfoItem>
              <MyInfoItem>
                <MyGroupContainer>
                  <MyText title>내가 속한 단체</MyText>
                  <MyGroupTable columns={columns} data={groupData} />
                </MyGroupContainer>
              </MyInfoItem>
            </MyInfoContainer>
          </MyPageContainer>
        </WhiteBox>
      )}
      {!showMyPage && <WhiteBox></WhiteBox>}
    </HomepagePosition>
  );
}

const HomepagePosition = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;

  min-width: 1000px;
  min-height: 600px;
`;

const WhiteBox = styled.div`
  width: 77.5vw;
  height: 58.1vh;
  background-color: white;
  opacity: 90%;
  border-radius: 30px 30px 0 0;
  margin: auto auto 0 auto; // 가운데 하단 정렬
  position: relative;
  z-index: 0;
`;

const LogoPart = styled.div`
  width: 13vw;
  height: 13vw;
  background-color: white;
  border-radius: 100px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  img {
    margin: 0 auto 0 auto;
    width: 4vw;
  }
  text {
    margin-top: 20px;
    letter-spacing: -2px;
    text-align: center;
    font-family: "Godo", sans-serif;
    font-size: 30px;
  }
`;

const BubblePart = styled.div`
  width: 140px;
  height: 50px;
  border: none;
  border-radius: var(--button-radius, 20px);
  background-color: var(--bubble-bg-color, #d9d9d9);
  margin-top: 2vh;
  margin-bottom: 40vh;
  margin-left: 10vw;
  padding: 3px 10px 3px 10px;
  box-shadow: 4px 4px 4px 0px gray;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  text-align: center;
  position: absolute;
  text {
    font-family: "Godo", sans-serif;
    font-size: 10px;
  }
  z-index: 10;
`;

const BubbleBubble = styled.div`
  position: absolute;
  border-style: solid;
  border-width: 30px 14px 0;
  border-color: #d9d9d9 transparent;
  display: block;
  width: 0;
  z-index: 11;
  bottom: -22px;
  left: 29px;
`;

const MyPageContainer = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px 30px 30px 30px;
  width: 150px;
  height: 220px;
  background-color: #f0f0f0; //#fff로 수정하기
  z-index: 0;
  margin: 7vh 2vw 0 3vw;
  padding: 80px 100px 50px 50px;
`;

const MyInfoContainer = styled.div`
  display: grid;
  grid-template-rows: 50px 70px auto;
  justify-content: left;
  align-items: flex-start;
  row-gap: 10px;
  margin-top: 30px;
`;

const MyGroupContainer = styled.div`
  display: grid;
  grid-template-rows: 50px 70px auto;
  justify-content: left;
  align-items: flex-start;
  row-gap: 10px;
`;

const MyInfoItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const MyText = styled.pre`
  font-weight: ${(props) => (props.title ? "bold" : "normal")};
  font-size: ${(props) => (props.title ? "20px" : "15px")};
  word-spacing: -5px;
`;

const AvatarChangeButton = styled.button`
  width: 100px;
  height: 30px;
  position: absolute;
  bottom: 0;
  margin: 25px 0 60px 40px;
  border-radius: 5px 5px 5px 5px;
  border: none;
  background-color: #d9d9d9;
  font-weight: 700;

  &:active, &:hover {
        cursor: pointer;
        background: #e8e8e8;
        color: black;
    }
`;

const ButtonOne = styled.button`
  width: 8.5vw;
  height: 11vh;
  background: var(--button-bg-color, #faff00);
  opacity: 85%;
  border: none;
  border-radius: 20px 20px 0 0;
  position: absolute;
  z-index: 2; // 컴포넌트 상대적으로 배치
  top: 34vh;
  left: 17vw;
  font-family: "Godo", sans-serif;
  font-size: 18px;
  box-shadow: 5px 5px 5px 0px gray;

  cursor: pointer;
  &:active,
  &:hover,
  &:focus {
    opacity: 100%;
    z-index: 2; // 버튼 위에 마우스 올리면 white box 위로 올라오게 설정
  }
  // 고도체
  @font-face {
    font-family: "Godo";
    font-style: normal;
    font-weight: 700;
    src: url("//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2")
        format("woff2"),
      url("//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff")
        format("woff");
  }
`;

const ButtonTwo = styled.button`
  width: 8.5vw;
  height: 11vh;
  background: var(--button-bg-color, #0029ff);
  opacity: 85%;
  border: none;
  border-radius: 20px 20px 0 0;
  position: absolute;
  z-index: 0; // 컴포넌트 상대적으로 배치
  top: 34vh;
  left: 26.5vw;
  font-family: "Godo", sans-serif;
  font-size: 18px;
  color: white;
  box-shadow: 5px 5px 5px 0px gray;

  cursor: pointer;
  &:active,
  &:hover,
  &:focus {
    opacity: 100%;
    z-index: 2; // 버튼 위에 마우스 올리면 white box 위로 올라오게 설정
  }
`;

export default IntroTemplate;
