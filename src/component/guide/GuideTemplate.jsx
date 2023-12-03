import React, { useRef, useEffect, useState, forwardRef } from "react";
import styled from 'styled-components';
import MenuBar from '../main screen/MenuBar';
// import GrayNavBar from "./GrayNavBar";
import imglist from './GuideImage.jsx';

function GuideTemplate() {
    //4개 안내 섹션에 대한 각각의 ref 생성
    const mainRef = useRef(null);
    const homePageRef = useRef(null);
    const articleRef = useRef(null);
    const plazeRef = useRef(null);

    const [activeRef, setActiveRef] = useState(null);

    const scrollToContent = (contentRef) => {
        console.log(`${contentRef}, ${contentRef.current}`);
        //contentRef가 null이 아니고, contentRef.current(참조하는 DOM 요소)가 null이 아닌지
        if (contentRef && contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log("작동하지 않습니다");
        }
    };

    useEffect(() => {
        scrollToContent(activeRef);
    }, [activeRef]);

    const detail = [
        "메인 화면에서 단체 아바타를 클릭하면 해당 단체의 홈페이지로 이동할 수 있습니다. 단체 계정을 통해 접속하면 해당 단체의 홈페이지를 원하는 방식대로 꾸밀 수 있습니다.",
        "메인 화면에서 단체 아바타를 클릭하면 해당 단체의 홈페이지로 이동할 수 있습니다. 단체 계정을 통해 접속하면 해당 단체의 홈페이지를 원하는 방식대로 꾸밀 수 있습니다.",
        "메인 화면에서 단체 아바타를 클릭하면 해당 단체의 홈페이지로 이동할 수 있습니다. 단체 계정을 통해 접속하면 해당 단체의 홈페이지를 원하는 방식대로 꾸밀 수 있습니다.",
        "메인 화면에서 단체 아바타를 클릭하면 해당 단체의 홈페이지로 이동할 수 있습니다. 단체 계정을 통해 접속하면 해당 단체의 홈페이지를 원하는 방식대로 꾸밀 수 있습니다."
    ]
    
    return (
        <>
        <MenuBar />
        <TranslucentBox>
            {/* GrayNavBar 컴포넌트에 setActiveRef 함수를 prop으로 전달. onNavClick은 그냥 매개변수 이름. */}
            <GrayNavBar 
                onNavClick={setActiveRef}
                refs={{mainRef, homePageRef, articleRef, plazeRef}}
            />
                <GuideContents detail={detail[0]} img={{ first: imglist[0][0], second: imglist[0][1]}} ref={mainRef}/>
                <GuideContents detail={detail[1]} img={{ first: imglist[1][0], second: imglist[1][1]}} ref={homePageRef}/>
                <GuideContents detail={detail[2]} img={{ first: imglist[2][0], second: imglist[2][1]}} ref={articleRef}/>
                <GuideContents detail={detail[3]} img={{ first: imglist[3][0], second: imglist[3][1]}} ref={plazeRef}/>
        </TranslucentBox>
        </>
    );
}

function GrayNavBar({onNavClick, refs}) {
    return (
        <GrayBox>
            <h3>이용안내</h3>
            <NavButtonContainer>
                <NavButton onClick={()=>{onNavClick(refs.mainRef)}}>개인/단체 아바타</NavButton>
                <NavButton onClick={()=>{onNavClick(refs.homePageRef)}}>단체 홈페이지</NavButton>
                <NavButton onClick={()=>{onNavClick(refs.articleRef)}}>뉴스레터</NavButton>
                <NavButton onClick={()=>{onNavClick(refs.plazeRef)}}>광장</NavButton>
            </NavButtonContainer>
        </GrayBox>
    );
}

const GuideContents = forwardRef(({detail, img}, ref) => {
    return (
        <div ref={ref}>
            <h4>단체 홈페이지</h4>
            <h5>{detail}</h5>
            <div>
                <GuideImage src={img.first} alt="First"/>
                <GuideImage src={img.second} alt="Second"/>
            </div>
        </div>
    );
});

const TranslucentBox = styled.div`
    width: 90vw;
    height: 80vh;
    bottom: 0;
    fill: rgba(255, 255, 255, 0.90);
`;

const GrayBox = styled.div`
    width: 100%;
    height: 10vh;
    fill: rgba(104, 104, 104, 0.70);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const NavButtonContainer = styled.div`
    
`;

const NavButton = styled.button`
    color: #000;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.25rem;
`;

const GuideImage = styled.img`
    
`;

export default GuideTemplate;